import { prisma } from './../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { email, name, patronymic, surname, password } = body;

        const existingUser = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Такой акк уже есть' }, { status: 400 });
        }

        const newUser = await prisma.user.create({
            data: {
                email: email,
                surname: surname,
                name: name,
                patronymic: patronymic,
                password: password,
                role: 'USER',
                UserBasket: {
                    create: {},
                },
            },
        });

        return NextResponse.json({ newUser });
    } catch (error) {
        console.error('Error:', error);
    }
}
