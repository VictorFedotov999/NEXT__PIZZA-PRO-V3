import { categories } from '../../../../prisma/constans';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    const categor = req.nextUrl.searchParams.get('categor') || '';

    const categorys = await prisma.category.findMany({});
    return NextResponse.json(categorys);
}
