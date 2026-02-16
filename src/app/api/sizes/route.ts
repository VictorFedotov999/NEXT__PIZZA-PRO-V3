import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const sizes = await prisma.sizeOption.findMany({
        distinct: ['size'],
        orderBy: {
            size: 'asc',
        },
    });

    return NextResponse.json(sizes);
}
