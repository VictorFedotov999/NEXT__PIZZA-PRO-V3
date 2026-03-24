import { API_SORTING, axionsInstatce } from './instance';
import { Sorting } from '@prisma/client';

export const getSorts = async () => {
    try {
        const { data } = await axionsInstatce.get<Sorting[]>(API_SORTING);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
