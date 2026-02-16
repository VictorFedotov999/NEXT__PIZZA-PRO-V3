import { TypeOption } from '@prisma/client';
import { axionsInstatce } from './instance';

export const getTypes = async () => {
    const { data } = await axionsInstatce.get<TypeOption[]>('/api/typesss');
    return data;
};
