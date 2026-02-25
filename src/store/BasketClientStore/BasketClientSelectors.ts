import { useProductBasketClientStore } from './BasketClientStore';

export const useProductBasketClient = () => useProductBasketClientStore((state) => state.items);

export const fetchCartItems = () => useProductBasketClientStore.getState().fetchCartItems();
