import { API_BASKET_PRODUCT_CLIENT, axionsInstatce } from './instance';

export const getBasketProductClient = async () => {
    const { data } = await axionsInstatce.get(API_BASKET_PRODUCT_CLIENT);
    return data;
};
