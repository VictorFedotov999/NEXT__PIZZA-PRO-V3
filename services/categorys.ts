import { API_CATEGORY, axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getCategorys = async () => {
    const { data } = await axionsInstatce.get<Category[]>(API_CATEGORY);
    return data;
};
