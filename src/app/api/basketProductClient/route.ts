import { SizeOption } from '@prisma/client';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const productBasket = await prisma.basketItem.findMany({
        where: {
            userBasketId: 1,
        },
        include: {
            product: {},
        },
    });
    return NextResponse.json(productBasket);
}
