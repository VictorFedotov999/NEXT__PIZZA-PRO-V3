import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProductInfo = ({ product }: IProps) => {
    return (
        <>
            <h1 className='basket__item__info-title'>{product.title}</h1>
            {product.ingredients.length >= 1 ? (
                <p className='basket__item__info-text'>
                    Размер:{product.pizzaSize}см Тип:{product.pizzaType} <br />
                    Ингридиенты: {product.ingredients.map((item) => `${item.title}, `)}
                </p>
            ) : (
                <p className='basket__item__info-text'>
                    Размер:{product.pizzaSize}см Тип:{product.pizzaType}
                </p>
            )}
        </>
    );
};
