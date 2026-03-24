import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const sorts = await prisma.sorting.findMany();
        return NextResponse.json(sorts);
    } catch (error) {
        console.error('Error:', error);
    }
}
