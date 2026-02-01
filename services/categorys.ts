import { axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getCategorys = async () => {
    const { data } = await axionsInstatce.get<Category[]>('/api/categor');
    return data;
};
