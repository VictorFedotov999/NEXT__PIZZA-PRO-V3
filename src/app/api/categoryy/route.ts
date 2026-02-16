import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const categorys = await prisma.category.findMany();
    return NextResponse.json(categorys);
}
