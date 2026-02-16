import { axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getBasketProductClient = async () => {
    const { data } = await axionsInstatce.get('/api/basketProductClient');
    return data;
};
