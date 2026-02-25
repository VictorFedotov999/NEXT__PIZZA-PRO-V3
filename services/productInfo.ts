import { TypeOption, SizeOption, Ingredient } from '@prisma/client';
import {
    API_PRODUCT_INGREDIENTS,
    API_PRODUCT_SIZES,
    API_PRODUCT_TYPES,
    axionsInstatce,
} from './instance';

export const getTypes = async () => {
    const { data } = await axionsInstatce.get<TypeOption[]>(API_PRODUCT_TYPES);
    return data;
};

export const getSizes = async () => {
    const { data } = await axionsInstatce.get<[SizeOption]>(API_PRODUCT_SIZES);
    return data;
};

export const getIngredients = async () => {
    const { data } = await axionsInstatce.get<Ingredient[]>(API_PRODUCT_INGREDIENTS);
    return data;
};
