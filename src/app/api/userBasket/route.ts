import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const sorts = await prisma.userBasket.findMany();
    return NextResponse.json(sorts);
}
