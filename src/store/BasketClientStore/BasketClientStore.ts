import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IInitialState, IUseProductBasketClientState } from './BasketClientType';
import { getBasketProductClient } from '../../../services/basketProductClient';
import { infoBasketProductInfo } from '../../../lib/info-basket-product';

const initialState: IInitialState = {
    items: [],
    error: false,
    loading: true,
    totalCost: 0,
    productCount: 0,
};

const ProductBasketClientStore: StateCreator<IUseProductBasketClientState> = (set, get) => ({
    ...initialState,

    fetchCartItems: async (): Promise<any> => {
        try {
            set({ loading: true, error: false });
            const data = await getBasketProductClient();
            const items = infoBasketProductInfo(data);

            set({ items: items, loading: false });
        } catch (error) {
            console.error(error);
            set({ error: true, loading: false });
        }
    },
});

export const useProductBasketClientStore = create<IUseProductBasketClientState>()(
    devtools(ProductBasketClientStore),
);
