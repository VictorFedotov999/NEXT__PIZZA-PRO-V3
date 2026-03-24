import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    try {
        const categoryParam = req.nextUrl.searchParams.get('category') || '0';
        const sort = req.nextUrl.searchParams.get('sort') || 'Рейтинг';
        const ingredientsParam = req.nextUrl.searchParams.get('ingredients') || '';
        const sizeParam = req.nextUrl.searchParams.get('size') || '';
        const typeParam = req.nextUrl.searchParams.get('type') || '';

        const where: any = {};
        let orderBy: any = undefined;

        if (Number(categoryParam) === 0) {
            prisma.product.findMany();
        } else {
            where.categoryId = Number(categoryParam);
        }

        if (typeParam) {
            const types = typeParam.split(',');

            where.typeOptions = {
                some: {
                    type: { in: types },
                },
            };
        }

        if (sizeParam) {
            const sizes = sizeParam.split(',').map(Number);
            where.sizeOptions = {
                some: {
                    size: { in: sizes },
                },
            };
        }

        if (ingredientsParam) {
            const ingredientsTitle = ingredientsParam.split(',');
            where.ingredients = {
                some: {
                    title: { in: ingredientsTitle },
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
            where,
            orderBy: sortMap[sort],
            include: {
                typeOptions: {},
                sizeOptions: {},
                ingredients: {},
            },
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error:', error);
    }
}
