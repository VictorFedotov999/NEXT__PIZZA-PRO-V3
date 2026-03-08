import { Prisma } from '@prisma/client';

export type ProductIdType = Prisma.ProductGetPayload<{
    include: {
        typeOptions: {};
        sizeOptions: {};
        ingredients: {};
    };
}>;

export type BasketProductType = Prisma.UserBasketGetPayload<{
    include: {
        userBasketProducts: {
            include: {
                product: {};
                sizeOption: {};
                typeOption: {};
                ingredients: {};
            };
        };
    };
}>;
