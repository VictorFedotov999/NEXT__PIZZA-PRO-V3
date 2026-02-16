import { Product } from '@prisma/client';
import { axionsInstatce } from './instance';

export const category = async (
    category: string,
    sort: string,
    ingredients: string,
    size: string,
    type: string,
): Promise<Product[]> => {
    const { data } = await axionsInstatce.get<Product[]>('/api/productss/', {
        params: { category, sort, ingredients, size, type },
    });
    return data;
};
