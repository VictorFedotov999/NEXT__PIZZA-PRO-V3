import { product } from './../../../prisma/constans';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IInitialState, IUseProductBasketClientState } from './BasketClientType';
import { sameProductFunc } from '../../../utils/sameProduct';

const initialState: IInitialState = {
    products: [],
    totalCost: 0,
    productCount: 0,
};

const ProductBasketClientStore: StateCreator<IUseProductBasketClientState> = (set, get) => ({
    ...initialState,
    addProduct: (newProduct) => {
        const { products } = get();

        const sameProduct = sameProductFunc(products, newProduct);

        if (sameProduct) {
            set((state) => ({
                products: state.products.map((product) =>
                    product.id === newProduct.id &&
                    product.size === newProduct.size &&
                    product.type === newProduct.type
                        ? {
                              ...product,
                              count: product.count + 1,
                          }
                        : { ...product },
                ),

                productCount: state.productCount + 1,
                totalCost: state.totalCost + newProduct.price,
            }));
        } else {
            set((state) => ({
                products: [...state.products, newProduct],
                productCount: state.productCount + 1,
                totalCost: state.totalCost + newProduct.price,
            }));
        }
    },
    removeProduct: (newProduct) => {
        set((state) => ({
            products: state.products.filter(
                (product) =>
                    !(
                        product.id === newProduct.id &&
                        product.size === newProduct.size &&
                        product.type === newProduct.type
                    ),
            ),
            productCount: state.productCount - 1,
        }));
    },
    plusProduct: (newProduct) => {
        const { products } = get();
        const sameProduct = products.find(
            (product) =>
                product.id === newProduct.id &&
                product.size === newProduct.size &&
                product.type === newProduct.type,
        );

        if (sameProduct) {
            set((state) => ({
                products: state.products.map((product) =>
                    product.id === newProduct.id &&
                    product.size === newProduct.size &&
                    product.type === newProduct.type
                        ? {
                              ...product,
                              count: product.count + 1,
                          }
                        : { ...product },
                ),

                productCount: state.productCount + 1,
                totalCost: state.totalCost + newProduct.price,
            }));
        }
    },
});
export const useProductBasketClientStore = create<IUseProductBasketClientState>()(
    devtools(ProductBasketClientStore),
);
