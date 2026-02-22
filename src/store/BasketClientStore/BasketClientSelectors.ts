import { useProductBasketClientStore } from './BasketClientStore';
import { IBasketProduct } from './BasketClientType';

export const useProductBasketClient = () => useProductBasketClientStore((state) => state.products);

export const useProductBasketCost = () => useProductBasketClientStore((state) => state.totalCost);

export const useProductBasketCount = () =>
    useProductBasketClientStore((state) => state.productCount);

export const addProduct = (basketProduct: IBasketProduct) =>
    useProductBasketClientStore.getState().addProduct(basketProduct);

export const removeProduct = (basketProduct: IBasketProduct) =>
    useProductBasketClientStore.getState().removeProduct(basketProduct);

export const plusProduct = (basketProduct: IBasketProduct) =>
    useProductBasketClientStore.getState().plusProduct(basketProduct);
