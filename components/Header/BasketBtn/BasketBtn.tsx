'use client';

import React from 'react';

import { BasketSvg } from './BasketSvg';
import { Basket } from '../../Basket/Basket';

export const BasketBtn = () => {
    const [openBasket, setOpenBasket] = React.useState(false);

    const onClickBasket = (open: boolean) => {
        setOpenBasket(open);
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
