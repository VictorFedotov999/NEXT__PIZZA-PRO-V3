import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const CartItemInfo = ({ product }: IProps) => {
    return (
        <>
            <div className='order__item-info'>
                <h1 className='order__item-title'>{product.title}</h1>
                <p className='order__item-text'>
                    {product.pizzaSize} см, {product.pizzaType} тесто
                </p>
            </div>
            <h2 className='order__item-price'>{product.price} ₽</h2>
        </>
    );
};
