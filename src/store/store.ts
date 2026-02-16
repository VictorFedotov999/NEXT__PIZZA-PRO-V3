import { count } from 'console';
import { create } from 'zustand';

type newProductType = {
    id: number;
    size: string;
};

interface useProductType {
    products: newProductType[];
    addProduct: (newProduct: newProductType) => void;
}

export const useProduct = create<useProductType>((set) => ({
    products: [],
    addProduct: (newProduct) => set((state) => ({ products: [...state.products, newProduct] })),
}));
