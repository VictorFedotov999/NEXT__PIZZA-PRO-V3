import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    try {
        const queryParam = req.nextUrl.searchParams.get('query') || '';

        const where: any = {};

        if (queryParam) {
            where.title = {
                contains: queryParam,
                mode: 'insensitive',
            };
        }

        const products = await prisma.product.findMany({
            where,
            take: 5,
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error:', error);
    }
}
