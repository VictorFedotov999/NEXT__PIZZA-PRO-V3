import { Prisma } from '@prisma/client';

export type FullProductType = Prisma.ProductGetPayload<{
    include: {
        sizeOption: true;
        typeOption: true;
        ingredient: true;
    };
}>;
