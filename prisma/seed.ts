import {
    categories,
    product,
    ingredients,
    filters,
    sorting,
    sizeOption,
    typeOption,
} from './constans';
import { prisma } from './prisma-client';

async function seed() {
    await prisma.userBasket.deleteMany();
    await prisma.user.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.sizeOption.deleteMany();
    await prisma.typeOption.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.sorting.deleteMany();
    await prisma.filter.deleteMany();

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.sorting.createMany({
        data: sorting,
    });

    await prisma.filter.createMany({
        data: filters,
    });

    await prisma.sizeOption.createMany({
        data: sizeOption,
    });

    await prisma.typeOption.createMany({
        data: typeOption,
    });

    await prisma.ingredient.createMany({
        data: ingredients,
    });

    for (const item of product) {
        await prisma.product.create({
            data: item,
        });
    }
}

seed();
