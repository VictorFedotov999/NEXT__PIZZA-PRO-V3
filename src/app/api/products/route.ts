import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    const queryParam = req.nextUrl.searchParams.get('query') || '';
    const categoryParam = req.nextUrl.searchParams.get('category') || '0';
    const sort = req.nextUrl.searchParams.get('sort') || 'Рейтинг';
    const ingredientsParam = req.nextUrl.searchParams.get('ingredients') || '';
    const sizeParam = req.nextUrl.searchParams.get('size') || '';
    const typeParam = req.nextUrl.searchParams.get('type') || '';
    console.log('Filtering by ingredients:', ingredientsParam);

    const where: any = {};
    let orderBy: any = undefined;

    if (queryParam) {
        where.title = {
            contains: queryParam,
            mode: 'insensitive',
        };
    }

    if (typeParam) {
        const types = typeParam.split(',');
        where.typeOption = {
            every: {
                type: { in: types },
            },
        };
    }

    if (sizeParam) {
        const sizes = sizeParam.split(',').map(Number);
        where.sizeOption = {
            every: {
                size: { in: sizes },
            },
        };
    }

    if (Number(categoryParam) !== 0) {
        where.categoryId = Number(categoryParam);
    }

    if (ingredientsParam) {
        const ingredientsTitle = ingredientsParam.split(',');
        where.ingredient = {
            every: {
                title: { in: ingredientsTitle },
            },
        };
        where.AND = {
            ingredient: {
                some: {},
            },
        };
    }

    const sortMap: Record<string, any> = {
        Рейтинг: { rating: 'desc' },
        Цене: { price: 'asc' },
        Алфавиту: { title: 'asc' },
    };

    if (sort && sortMap[sort]) {
        orderBy = sortMap[sort];
    }

    const products = await prisma.product.findMany({
        where: where,
        orderBy,
        include: {
            typeOption: true,
            sizeOption: true,
            ingredient: true,
        },
    });

    return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const product = await prisma.product.create({
        data,
    });

    return NextResponse.json(product);
}
