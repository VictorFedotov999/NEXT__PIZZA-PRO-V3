import { categories, product, ingredients, filters, sorting } from './constans';
import { prisma } from './prisma-client';

async function seed() {
    await prisma.userBasket.deleteMany(); // ← очистка корзины
    await prisma.ingredient.deleteMany();
    await prisma.sizeOption.deleteMany();
    await prisma.typeOption.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
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

    await prisma.user.createMany({
        data: [
            { name: 'Nikita', surname: 'Pashenko', patronymic: null, role: 'USER' },
            { name: 'Andrey', surname: 'Nikiten', patronymic: null, role: 'USER' },
            { name: 'Pasha', surname: 'Litakov', patronymic: null, role: 'USER' },
            { name: 'Admin', surname: 'Adminov', patronymic: null, role: 'ADMIN' },
        ],
    });
    await prisma.product.createMany({
        data: product,
    });
    await prisma.userBasket.createMany({
        data: [
            { userId: 1, productId: 2, quantity: 1 },
            { userId: 1, productId: 3, quantity: 1 },
            { userId: 1, productId: 4, quantity: 1 },
        ],
    });

    await prisma.sizeOption.createMany({
        data: [
            // Масала - 1 размер
            { productId: 1, size: 35, price: 450 },

            // Пицца с хреном - 2 размера
            { productId: 2, size: 20, price: 500 },
            { productId: 2, size: 35, price: 700 },

            // Мясная - 3 размера
            { productId: 3, size: 20, price: 400 },
            { productId: 3, size: 35, price: 600 },
            { productId: 3, size: 45, price: 800 },

            // Ветчина и грибы - 1 размер
            { productId: 4, size: 35, price: 550 },

            // Аррива! - 2 размера
            { productId: 5, size: 20, price: 480 },
            { productId: 5, size: 35, price: 650 },

            // Креветски со сладким чили - 1 размер
            { productId: 6, size: 35, price: 620 },

            // Карбонара - 3 размера
            { productId: 7, size: 20, price: 420 },
            { productId: 7, size: 35, price: 580 },
            { productId: 7, size: 45, price: 750 },

            // Жюльен - 2 размера
            { productId: 8, size: 20, price: 530 },
            { productId: 8, size: 35, price: 680 },

            // Песто - 1 размер
            { productId: 9, size: 35, price: 570 },

            // Бургер-пицца - 2 размера
            { productId: 10, size: 20, price: 490 },
            { productId: 10, size: 35, price: 670 },

            // Сырный цыпленок - 3 размера
            { productId: 11, size: 20, price: 430 },
            { productId: 11, size: 35, price: 590 },
            { productId: 11, size: 45, price: 780 },

            // Пепперони - 1 размер
            { productId: 12, size: 35, price: 540 },
        ],
    });

    await prisma.typeOption.createMany({
        data: [
            // Масала - 2 типа
            { productId: 1, type: 'Обычная', price: 0 },
            { productId: 1, type: 'Традиционная', price: 50 },

            // Пицца с хреном - 1 тип
            { productId: 2, type: 'Обычная', price: 0 },

            // Мясная - 2 типа
            { productId: 3, type: 'Обычная', price: 0 },
            { productId: 3, type: 'Традиционная', price: 60 },

            // Ветчина и грибы - 1 тип
            { productId: 4, type: 'Обычная', price: 0 },

            // Аррива! - 2 типа
            { productId: 5, type: 'Обычная', price: 0 },
            { productId: 5, type: 'Традиционная', price: 55 },

            // Креветски со сладким чили - 1 тип
            { productId: 6, type: 'Обычная', price: 0 },

            // Карбонара - 2 типа
            { productId: 7, type: 'Обычная', price: 0 },
            { productId: 7, type: 'Традиционная', price: 70 },

            // Жюльен - 1 тип
            { productId: 8, type: 'Обычная', price: 0 },

            // Песто - 2 типа
            { productId: 9, type: 'Обычная', price: 0 },
            { productId: 9, type: 'Традиционная', price: 65 },

            // Бургер-пицца - 1 тип
            { productId: 10, type: 'Обычная', price: 0 },

            // Сырный цыпленок - 2 типа
            { productId: 11, type: 'Обычная', price: 0 },
            { productId: 11, type: 'Традиционная', price: 75 },

            // Пепперони - 1 тип
            { productId: 12, type: 'Обычная', price: 0 },
        ],
    });

    await prisma.ingredient.createMany({
        data: [
            // Масала - есть ингредиенты
            {
                productId: 1,
                img: ingredients[0].img,
                title: ingredients[0].title,
                price: ingredients[0].price,
            },
            {
                productId: 1,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },
            {
                productId: 1,
                img: ingredients[5].img,
                title: ingredients[5].title,
                price: ingredients[5].price,
            },

            // Пицца с хреном - нет ингредиентов

            // Мясная - есть ингредиенты
            {
                productId: 3,
                img: ingredients[1].img,
                title: ingredients[1].title,
                price: ingredients[1].price,
            },
            {
                productId: 3,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },
            {
                productId: 3,
                img: ingredients[3].img,
                title: ingredients[3].title,
                price: ingredients[3].price,
            },
            {
                productId: 3,
                img: ingredients[5].img,
                title: ingredients[5].title,
                price: ingredients[5].price,
            },

            // Ветчина и грибы - есть ингредиенты
            {
                productId: 4,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },
            {
                productId: 4,
                img: ingredients[6].img,
                title: ingredients[6].title,
                price: ingredients[6].price,
            },

            // Аррива! - нет ингредиентов

            // Креветски со сладким чили - есть ингредиенты
            {
                productId: 6,
                img: ingredients[0].img,
                title: ingredients[0].title,
                price: ingredients[0].price,
            },
            {
                productId: 6,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },

            // Карбонара - есть ингредиенты
            {
                productId: 7,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },
            {
                productId: 7,
                img: ingredients[3].img,
                title: ingredients[3].title,
                price: ingredients[3].price,
            },
            {
                productId: 7,
                img: ingredients[4].img,
                title: ingredients[4].title,
                price: ingredients[4].price,
            },

            // Жюльен - нет ингредиентов

            // Песто - есть ингредиенты
            {
                productId: 9,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },
            {
                productId: 9,
                img: ingredients[5].img,
                title: ingredients[5].title,
                price: ingredients[5].price,
            },

            // Бургер-пицца - есть ингредиенты
            {
                productId: 10,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },

            // Сырный цыпленок - есть ингредиенты
            {
                productId: 11,
                img: ingredients[2].img,
                title: ingredients[2].title,
                price: ingredients[2].price,
            },
            {
                productId: 11,
                img: ingredients[3].img,
                title: ingredients[3].title,
                price: ingredients[3].price,
            },
            {
                productId: 11,
                img: ingredients[5].img,
                title: ingredients[5].title,
                price: ingredients[5].price,
            },

            // Пепперони - нет ингредиентов
        ],
    });
}

seed();
