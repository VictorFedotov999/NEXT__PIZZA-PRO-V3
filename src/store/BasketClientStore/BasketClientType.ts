import { product } from './../../../prisma/constans';
import { Ingredient, Product, SizeOption, TypeOption, UserBasket } from '@prisma/client';

export interface IActions {
    fetchCartItems: () => void;
    addCartItem: (value: { productItemId: number; quantity: number }) => void;
    removeCartItem: (productId: number) => void;
    removeBasketProducts: () => void;
    increaseCartItem: (productId: number, count: number) => void;
}

export interface IInitialState {
    items: IBasketItemsStore[];
    error: boolean;
    loading: boolean;
    totalCost: number;
    productCount: number;
}

export interface IUseProductBasketClientState extends IInitialState, IActions {}

// полный ответ со всеми полями
export interface IBasketProduct extends UserBasket {
    product: IProduct;
}
//что будет в стайте после обработки
export interface IBasketItemsStore {
    id: number;
    quantity: number;
    title: string;
    imageUrl: string;
    price: number;
    pizzaSize?: number | null;
    pizzaType?: string | null;
    ingredients: Array<{ title: string; price: number }>;
}

//продукт с полями
export interface IProduct extends Product {
    ingredient: Ingredient[];
    sizeOption: SizeOption[];
    typeOption: TypeOption[];
}
