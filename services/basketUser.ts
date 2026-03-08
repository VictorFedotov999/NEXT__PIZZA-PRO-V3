import { API_BASKET_USER, axionsInstatce } from './instance';

export const getBasketUser = async () => {
    const { data } = await axionsInstatce.get(API_BASKET_USER);
    return data;
};

export const addProductItem = async (value: any) => {
    const { data } = await axionsInstatce.post(API_BASKET_USER, value);
    return data;
};

export const removeProductItem = async (productId: number) => {
    const { data } = await axionsInstatce.delete(API_BASKET_USER, { data: { productId } });
    return data;
};

export const clearBasket = async () => {
    const { data } = await axionsInstatce.delete(API_BASKET_USER, {
        data: { clear: true },
    });

    return data;
};

export const increaseProductCount = async (productId: number, count: number) => {
    const { data } = await axionsInstatce.patch(API_BASKET_USER, { productId, count });
    return data;
};

increaseProductCount;
