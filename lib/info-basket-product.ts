import { ingredients, product } from './../prisma/constans';
import { IBasketItemsStore, IBasketProduct } from '@/store/BasketClientStore/BasketClientType';

interface IReturProps {
    items: IBasketItemsStore[];
}

export const infoBasketProductInfo = (data: any): IReturProps => {
    return data.map((item: IBasketProduct) => ({
        id: item.product.id,
        title: item.product.title,
        imageUrl: item.product.imageUrl,
        price: item.product.price,
        pizzaSize: item.product.sizeOption.map((size) => size.size),
        pizzaType: item.product.typeOption.map((type) => type.type),
        ingredients: item.product.ingredient.map((ingredients) => ingredients.title),
    }));
};
