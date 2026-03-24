import { API_PRODUCTS, axionsInstatce } from './instance';

export const filteringProduct = async (
    category: string,
    sort: string,
    ingredients: string,
    size: string,
    type: string,
) => {
    try {
        const { data } = await axionsInstatce.get(API_PRODUCTS, {
            params: { category, sort, ingredients, size, type },
        });
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
