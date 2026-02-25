import { API_SORTING, axionsInstatce } from './instance';
import { Category } from '@prisma/client';

export const getSorts = async () => {
    const { data } = await axionsInstatce.get<Category[]>(API_SORTING);
    return data;
};
