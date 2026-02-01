'use client';

import React from 'react';
import { BasketCost } from '../../Basket/BasketCost/BasketCost';
import { BasketInfo } from '../../Basket/BasketInfo/BasketInfo';
import { BasketProducts } from '../../Basket/BasketProducts/BasketProducts';
// import { BasketBtnEmpty } from 'components/BasketBtnEmpty/BasketBtnEmpty';
import { BasketBtnEmpty } from '../../BasketBtnEmpty/BasketBtnEmpty';
import { BasketSvg } from './BasketSvg';
import Link from 'next/link';
import { Basket } from '../../Basket/Basket';

export const BasketBtn = () => {
    const [openBasket, setOpenBasket] = React.useState(false);

    const onClickBasket = (state) => {
        setOpenBasket(state);
    };

    return (
        <>
            <div className='header__basket'>
                <button className='header__basket-btn' onClick={() => onClickBasket(true)}>
                    <p className='header__basket-price'>520 ₽</p>
                    <BasketSvg />
                    <p className='header__basket-count'>3</p>
                </button>

                <Basket openBasket={openBasket} onClickBasket={onClickBasket} />
            </div>
        </>
    );
};
