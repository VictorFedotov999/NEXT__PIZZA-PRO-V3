import { prisma } from './../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);

        const basketUser = await prisma.userBasket.findMany({
            where: { userId },
            include: {
                userBasketProducts: {
                    orderBy: { id: 'asc' },
                    include: {
                        product: true,
                        sizeOption: true,
                        typeOption: true,
                        ingredients: true,
                    },
                },
            },
        });

        return NextResponse.json(basketUser ?? []);
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);
        const body = await req.json();

        const ingredientIds: number[] = Array.isArray(body.ingredients) ? body.ingredients : [];

        const userBasket = await prisma.userBasket.findFirst({ where: { userId } });
        if (!userBasket) return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });

        // Проверка существующего товара с такими же ингредиентами
        const existingItems = await prisma.userBasketProduct.findMany({
            where: {
                basketId: userBasket.id,
                productId: body.productId,
                sizeOptionId: body.sizeOptionId,
                typeOptionId: body.typeOptionId,
            },
            include: { ingredients: true },
        });

        const compareIngredients = (a: number[], b: number[]) =>
            a.length === b.length && [...a].sort().every((id, i) => id === [...b].sort()[i]);

        const existingItem = existingItems.find((item) =>
            compareIngredients(
                item.ingredients.map((i) => i.id),
                ingredientIds,
            ),
        );

        if (existingItem) {
            const updatedItem = await prisma.userBasketProduct.update({
                where: { id: existingItem.id },
                data: { quantity: { increment: 1 } },
                include: { product: true, sizeOption: true, typeOption: true, ingredients: true },
            });
            return NextResponse.json(updatedItem);
        }

        // Создание нового товара с ингредиентами
        const basketItem = await prisma.userBasketProduct.create({
            data: {
                basketId: userBasket.id,
                productId: body.productId,
                sizeOptionId: body.sizeOptionId,
                typeOptionId: body.typeOptionId,
                quantity: 1,
                ingredients: {
                    connect: ingredientIds.map((id) => ({ id })),
                },
            },
            include: { product: true, sizeOption: true, typeOption: true, ingredients: true },
        });

        return NextResponse.json(basketItem);
    } catch (error) {
        console.error('POST Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера', details: error }, { status: 500 });
    }
}

// ================= PATCH =================
export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();
        await prisma.userBasketProduct.update({
            where: { id: body.productId },
            data: { quantity: body.count },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('PATCH Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}

// ================= DELETE =================
export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);
        const body = await req.json();

        const userBasket = await prisma.userBasket.findFirst({ where: { userId } });
        if (!userBasket) return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });

        if (body.clear) {
            await prisma.userBasketProduct.deleteMany({
                where: { basketId: userBasket.id },
            });
            return NextResponse.json({ success: true });
        }

        await prisma.userBasketProduct.deleteMany({
            where: { id: body.productId, basketId: userBasket.id },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('DELETE Error:', error);
        return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}
