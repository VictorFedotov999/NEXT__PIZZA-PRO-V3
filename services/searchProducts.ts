import { Product } from '@prisma/client';
import { axionsInstatce } from './instance';

export const search = async (query: string): Promise<Product[]> => {
    const { data } = await axionsInstatce.get<Product[]>('api/productss/', {
        params: { query },
    });
    return data;
};
