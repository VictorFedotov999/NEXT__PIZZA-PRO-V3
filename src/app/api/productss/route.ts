import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';
    const categor = req.nextUrl.searchParams.get('categor') || '';

    const products = await prisma.product.findMany({
        where: {
            title: {
                contains: query,
                mode: 'insensitive',
            },
        },
        take: 5,
    });
    return NextResponse.json(products);
}
