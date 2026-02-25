'use client';

import React from 'react';
import { BasketCostBtn } from '../BasketCost/BasketCostBtn';
import { BasketProduct } from '../BasketProduct/BasketProduct';
import { BasketProductEmpty } from '../BasketProductEmpty/BasketProductEmpty';
import {
    fetchCartItems,
    useProductBasketClient,
} from '@/store/BasketClientStore/BasketClientSelectors';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

export const BasketProducts = () => {
    const BasketProductClient = useProductBasketClient();
    console.log(BasketProductClient, 'BasketProductClient');

    React.useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    return (
        <>
            <div className='basket__content'>
                <div className='basket__items'>
                    {BasketProductClient.map((product: IBasketItemsStore) => (
                        <BasketProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};
