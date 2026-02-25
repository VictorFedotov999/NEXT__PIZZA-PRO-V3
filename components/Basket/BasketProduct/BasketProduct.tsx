'use client';

import { BasketProductInfo } from '../BasketProductInfo/BasketProductInfo';
import { BasketProductCount } from '../BasketProductCount/BasketProductCount';
import { addProductBasket, removeProductBasket } from '../../../lib/add-Product-Basket';
import { IBasketItemsStore, IBasketProduct } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProduct = ({ product }: IProps) => {
    const { imageUrl, title } = product;
    return (
        <>
            <div className='basket__item'>
                <img className='basket__item-img' src={imageUrl} alt='photoProduct' />

                <div className='basket__item__info'>
                    <BasketProductInfo product={product} />
                    <BasketProductCount product={product} />
                </div>
            </div>
        </>
    );
};
