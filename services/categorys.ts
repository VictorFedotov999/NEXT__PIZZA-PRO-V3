import { API_CATEGORY, axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getCategorys = async () => {
    try {
        const { data } = await axionsInstatce.get<Category[]>(API_CATEGORY);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
