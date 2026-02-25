import { Product } from '@prisma/client';
import { API_PRODUCTS, axionsInstatce } from './instance';
import { IProduct } from '../sharedType/type';

export const search = async (query: string): Promise<IProduct> => {
    const { data } = await axionsInstatce.get<IProduct>(API_PRODUCTS, {
        params: { query },
    });
    return data;
};
