import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const types = await prisma.typeOption.findMany({
        distinct: ['type'],
        orderBy: {
            type: 'asc',
        },
    });
    return NextResponse.json(types);
}
