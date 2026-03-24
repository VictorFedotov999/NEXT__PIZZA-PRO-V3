import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const types = await prisma.typeOption.findMany();
        return NextResponse.json(types);
    } catch (error) {
        console.error('Error:', error);
    }
}
