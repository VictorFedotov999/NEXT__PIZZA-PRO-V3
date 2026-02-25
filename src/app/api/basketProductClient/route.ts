import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const productBasket = await prisma.userBasket.findMany({
        where: {
            userId: 1,
        },

        include: {
            product: {
                include: {
                    sizeOption: true,
                    typeOption: true,
                    ingredient: true,
                },
            },
        },
    });
    return NextResponse.json(productBasket);
}
