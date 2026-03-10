'use client';

import React from 'react';
import { BasketCost } from './BasketCost/BasketCost';
import { BasketInfo } from './BasketInfo/BasketInfo';
import { BasketProducts } from './BasketProducts/BasketProducts';

import { BasketProductEmpty } from './BasketProductEmpty/BasketProductEmpty';
import { useFetchCartItems, useStoreItems } from '@/store/BasketClientStore/BasketClientSelectors';

interface IProps {
    openBasket: boolean;
    onClickBasket: (open: boolean) => void;
}

export const Basket = ({ openBasket, onClickBasket }: IProps) => {
    const basketProducts = useStoreItems();

    React.useEffect(() => {
        useFetchCartItems();
    }, [useFetchCartItems]);

    if (basketProducts.length === 0) {
        return (
            <section className={openBasket === true ? 'basket active' : 'basket'}>
                <div className='basket__container'>
                    <BasketProductEmpty onClickBasket={onClickBasket} />
                </div>
            </section>
        );
    }

    return (
        <>
            <section className={openBasket === true ? 'basket active' : 'basket'}>
                <div className='basket__container'>
                    <div className='basket__inner'>
                        <BasketInfo onClickBasket={onClickBasket} />
                        <BasketProducts basketProducts={basketProducts} />
                    </div>
                    <BasketCost onClickBasket={onClickBasket} />
                </div>
            </section>
        </>
    );
};
