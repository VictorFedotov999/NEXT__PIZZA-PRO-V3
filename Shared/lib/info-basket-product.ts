import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import { BasketProductType } from '../prisma/prismaType';

export const infoBasketProductInfo = (data: BasketProductType[]): IBasketItemsStore[] => {
    return data.flatMap((basket) =>
        basket.userBasketProducts.map((basketItem) => {
            const priceIngredients = basketItem.ingredients.map((ingredient) => ingredient.price);

            const ingredientsPrice = priceIngredients.reduce((sum, price) => sum + price, 0);

            const sizePrice = basketItem.sizeOption?.price ?? 0;
            const typePrice = basketItem.typeOption?.price ?? 0;

            const basePrice = basketItem.product?.price ?? 0;

            const totalPrice =
                (basePrice + ingredientsPrice + sizePrice + typePrice) * basketItem.quantity;

            return {
                id: basketItem.id,
                quantity: basketItem.quantity,

                title: basketItem.product?.title ?? '',
                imageUrl: basketItem.product?.image ?? '',

                price: totalPrice,

                pizzaSize: basketItem.sizeOption?.size ?? '',
                pizzaType: basketItem.typeOption?.type ?? '',

                ingredients: basketItem.ingredients,
            };
        }),
    );
};
