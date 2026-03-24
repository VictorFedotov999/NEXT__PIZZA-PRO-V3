import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const sizes = await prisma.sizeOption.findMany();
        return NextResponse.json(sizes);
    } catch (error) {
        console.error('Error:', error);
    }
}
