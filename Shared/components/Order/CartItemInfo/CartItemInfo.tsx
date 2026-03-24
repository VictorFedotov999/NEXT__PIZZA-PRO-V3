import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const CartItemInfo = ({ product }: IProps) => {
    return (
        <>
            <div className='order__item-info'>
                <h1 className='order__item-title'>{product.title}</h1>

                {product.ingredients.length >= 1 ? (
                    <p className='order__item-text'>
                        Размер: {product.pizzaSize} см Тип:{product.pizzaType} <br />
                        Ингридиенты: {product.ingredients.map((item) => `${item.title}, `)}
                    </p>
                ) : (
                    <p className='basket__item__info-text'>
                        Размер:{product.pizzaSize}см Тип:{product.pizzaType}
                    </p>
                )}
            </div>
            <h2 className='order__item-price'>{product.price} ₽</h2>
        </>
    );
};
