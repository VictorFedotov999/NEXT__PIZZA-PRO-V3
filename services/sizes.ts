import { axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getSizes = async () => {
    const { data } = await axionsInstatce.get<Category[]>('/api/sizes');
    return data;
};
