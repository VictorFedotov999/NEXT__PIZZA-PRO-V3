import { create } from 'zustand';
import { prisma } from './../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const categorys = await prisma.category.findMany();
    return NextResponse.json(categorys);
}
