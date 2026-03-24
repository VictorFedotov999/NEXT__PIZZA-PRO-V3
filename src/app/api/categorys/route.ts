import { prisma } from './../../../../prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const categorys = await prisma.category.findMany();
        return NextResponse.json(categorys);
    } catch (error) {
        console.error('Error:', error);
    }
}
