import { prisma } from './../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
        }
        const userId = parseInt(session.user.id);

        const basketUser = await prisma.userBasket.findMany({
            where: { userId: userId },
            include: {
                userBasketProducts: {
                    orderBy: {
                        id: 'asc',
                    },
                    include: {
                        product: {},
                        sizeOption: {},
                        typeOption: {},
                        ingredients: {},
                    },
                },
            },
        });
        return NextResponse.json(basketUser);
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
        }
        const userId = parseInt(session.user.id);

        const body = await req.json();

        const userBasket = await prisma.userBasket.findFirst({
            where: { userId: userId },
        });

        if (!userBasket) {
            return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });
        }

        const existingItems = await prisma.userBasketProduct.findMany({
            where: {
                basketId: userBasket.id,
                productId: body.productId,
                sizeOptionId: body.sizeOptionId,
                typeOptionId: body.typeOptionId,
            },
            include: {
                ingredients: true,
            },
        });

        const compareIngredients = (a: number[], b: number[]) => {
            if (a.length !== b.length) return false;

            const sortedA = [...a].sort();
            const sortedB = [...b].sort();

            return sortedA.every((id, index) => id === sortedB[index]);
        };

        const existingItem = existingItems.find((item) =>
            compareIngredients(
                item.ingredients.map((i) => i.id),
                body.ingredients || [],
            ),
        );

        if (existingItem) {
            const updatedItem = await prisma.userBasketProduct.update({
                where: {
                    id: existingItem.id,
                },
                data: {
                    quantity: {
                        increment: 1,
                    },
                },
                include: {
                    product: true,
                    sizeOption: true,
                    typeOption: true,
                    ingredients: true,
                },
            });

            return NextResponse.json(updatedItem);
        } else {
            const basketItem = await prisma.userBasketProduct.create({
                data: {
                    basketId: userBasket.id,
                    productId: body.productId,
                    sizeOptionId: body.sizeOptionId,
                    typeOptionId: body.typeOptionId,
                    ingredients: {
                        connect: (body.ingredients || []).map((id: number) => ({ id })),
                    },
                    quantity: 1,
                },
                include: {
                    product: true,
                    sizeOption: true,
                    typeOption: true,
                    ingredients: true,
                },
            });

            return NextResponse.json(basketItem);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();

        await prisma.userBasketProduct.update({
            where: {
                id: body.productId,
            },
            data: {
                quantity: body.count,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });
        }
        const userId = parseInt(session.user.id);

        const body = await req.json();

        const userBasket = await prisma.userBasket.findFirst({
            where: { userId: userId },
        });

        if (!userBasket) {
            return NextResponse.json({ error: 'Корзина не найдена' }, { status: 404 });
        }

        if (body.clear) {
            await prisma.userBasketProduct.deleteMany({
                where: {
                    basketId: userBasket.id,
                },
            });

            return NextResponse.json({ success: true });
        }

        await prisma.userBasketProduct.delete({
            where: {
                id: body.productId,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
    }
}
