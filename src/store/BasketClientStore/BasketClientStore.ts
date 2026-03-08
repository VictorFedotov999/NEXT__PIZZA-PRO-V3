import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { clearBasket } from '../../../services/basketUser';
import { infoBasketProductInfo } from '../../../lib/info-basket-product';
import { IInitialState, IUseProductBasketClientState } from './BasketClientType';
import {
    addProductItem,
    getBasketUser,
    increaseProductCount,
    removeProductItem,
} from '../../../services/basketUser';
import { sum } from 'lodash';

const initialState: IInitialState = {
    items: [],
    error: false,
    loading: true,
    totalCost: 0,
    productCount: 0,
};

const ProductBasketClientStore: StateCreator<IUseProductBasketClientState> = (set, get) => ({
    ...initialState,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false });
            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);

            set({
                items,
                totalCost: items.map((item) => item.price).reduce((sum, price) => sum + price, 0),
                productCount: items.length,
                loading: false,
            });
        } catch (error) {
            console.error(error);
            set({ error: true, loading: false });
        }
    },

    addCartItem: async (value) => {
        try {
            set({ loading: true, error: false });
            await addProductItem(value);

            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);

            set({
                items,
                totalCost: items.map((item) => item.price).reduce((sum, price) => sum + price, 0),
                productCount: items.length,
                loading: false,
            });
        } catch (error) {
            console.error(error);
            set({ error: true, loading: false });
        }
    },
    removeBasketProducts: async () => {
        try {
            set({ loading: true, error: false });

            await clearBasket();

            set({
                items: [],
                totalCost: 0,
                productCount: 0,
                loading: false,
            });
        } catch (error) {
            console.error(error);
            set({ error: true, loading: false });
        }
    },
    removeCartItem: async (productId) => {
        try {
            set({ loading: true, error: false });
            await removeProductItem(productId);
            const data = await getBasketUser();

            const items = infoBasketProductInfo(data);

            set({
                items,
                totalCost: items.map((item) => item.price).reduce((sum, price) => sum + price, 0),
                productCount: items.length,
                loading: false,
            });
        } catch (error) {
            console.error(error);
            set({ error: true, loading: false });
        }
    },

    increaseCartItem: async (productId, count) => {
        try {
            set({ loading: true, error: false });
            await increaseProductCount(productId, count);
            const data = await getBasketUser();
            const items = infoBasketProductInfo(data);

            set({
                items,
                totalCost: items.map((item) => item.price).reduce((sum, price) => sum + price, 0),

                loading: false,
            });
        } catch (error) {
            console.error(error);
            set({ error: true, loading: false });
        }
    },
});

export const useProductBasketClientStore = create<IUseProductBasketClientState>()(
    devtools(ProductBasketClientStore),
);
