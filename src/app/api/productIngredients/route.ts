import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const ingredients = await prisma.ingredient.findMany({
        distinct: ['title'],
        orderBy: {
            title: 'asc',
        },
    });
    return NextResponse.json(ingredients);
}
