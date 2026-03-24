import { API_BASKET_USER, axionsInstatce } from './instance';

export const getBasketUser = async () => {
    try {
        const { data } = await axionsInstatce.get(API_BASKET_USER);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const addProductItem = async (value: any) => {
    try {
        const { data } = await axionsInstatce.post(API_BASKET_USER, value);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const removeProductItem = async (productId: number) => {
    try {
        const { data } = await axionsInstatce.delete(API_BASKET_USER, { data: { productId } });
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const clearBasket = async () => {
    try {
        const { data } = await axionsInstatce.delete(API_BASKET_USER, {
            data: { clear: true },
        });

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const increaseProductCount = async (productId: number, count: number) => {
    try {
        const { data } = await axionsInstatce.patch(API_BASKET_USER, { productId, count });
        return data;

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};
