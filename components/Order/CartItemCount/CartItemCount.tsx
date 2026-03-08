'use client';

import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const CartItemCount = ({ product }: IProps) => {
    const { increaseCartItem } = useProductBasketClientStore();
    const plusProduct = () => {
        const count = product.quantity + 1;
        increaseCartItem(product.id, count);
    };

    const minusProduct = () => {
        const count = product.quantity - 1;
        increaseCartItem(product.id, count);
    };
    return (
        <>
            <div className='order__item-count'>
                <div className='item__count'>
                    <button
                        className='item__count-btn'
                        disabled={product.quantity === 1}
                        onClick={minusProduct}
                    >
                        -
                    </button>
                    <h4 className='item__count-number'>{product.quantity}</h4>
                    <button className='item__count-btn' onClick={plusProduct}>
                        +
                    </button>
                </div>
            </div>
        </>
    );
};
