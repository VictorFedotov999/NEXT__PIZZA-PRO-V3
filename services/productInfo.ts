import { TypeOption, SizeOption, Ingredient } from '@prisma/client';
import {
    API_PRODUCT_INGREDIENTS,
    API_PRODUCT_SIZES,
    API_PRODUCT_TYPES,
    axionsInstatce,
} from './instance';

export const getTypes = async () => {
    try {
        const { data } = await axionsInstatce.get<TypeOption[]>(API_PRODUCT_TYPES);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getSizes = async () => {
    try {
        const { data } = await axionsInstatce.get<SizeOption[]>(API_PRODUCT_SIZES);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getIngredients = async () => {
    try {
        const { data } = await axionsInstatce.get<Ingredient[]>(API_PRODUCT_INGREDIENTS);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
