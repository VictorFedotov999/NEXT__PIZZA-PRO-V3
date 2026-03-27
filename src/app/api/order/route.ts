import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) return NextResponse.json({ error: 'Не авторизован' }, { status: 401 });

        const userId = parseInt(session.user.id);
        const body = await req.json();
        const { name, surname, email, phone, address, comment } = body;

        const basket = await prisma.userBasket.findUnique({
            where: { userId },
            include: {
                userBasketProducts: {
                    include: {
                        product: true,
                        sizeOption: true,
                        typeOption: true,
                        ingredients: true,
                    },
                },
            },
        });

        if (!basket || basket.userBasketProducts.length === 0) {
            return NextResponse.json({ message: 'Корзина пуста' }, { status: 400 });
        }

        const order = await prisma.userOrder.create({
            data: {
                userId,
                name,
                surname,
                email,
                phone,
                address,
                comment,
                status: 'PENDING',
            },
        });

        const orderProductsData = basket.userBasketProducts.map((item) => ({
            userOrderId: order.id,
            title: item.product?.title || '',
            image: item.product?.image || '',
            description: item.product?.description || '',
            rating: item.product?.rating || 0,
            price: item.product?.price || 0,
            quantity: item.quantity,
            sizeValue: item.sizeOption?.size || 0,
            sizePrice: item.sizeOption?.price || 0,
            typeValue: item.typeOption?.type || '',
            typePrice: item.typeOption?.price || 0,
            ingredients: item.ingredients.length > 0 ? JSON.stringify(item.ingredients) : null,
        }));

        await prisma.userOrderProduct.createMany({
            data: orderProductsData,
        });

        await prisma.userBasketProduct.deleteMany({
            where: { basketId: basket.id },
        });

        return NextResponse.json(order);
    } catch (e) {
        console.error('ERROR POST ORDER:', e);
        return NextResponse.json(
            { message: 'Ошибка сервера', error: (e as Error).message },
            { status: 500 },
        );
    }
}
