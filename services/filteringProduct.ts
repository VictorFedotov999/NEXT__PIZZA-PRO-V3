import { Product } from '@prisma/client';
import { API_PRODUCTS, axionsInstatce } from './instance';

export const category = async (
    category: string,
    sort: string,
    ingredients: string,
    size: string,
    type: string,
): Promise<Product[]> => {
    const { data } = await axionsInstatce.get<Product[]>(API_PRODUCTS, {
        params: { category, sort, ingredients, size, type },
    });
    return data;
};
