'use client';

import React from 'react';
import { HeaderBtnInfo } from '../HeaderBtnInfo/HeaderBtnInfo';
import { Basket } from '../../Basket/Basket';
import {
    useProductBasketCost,
    useProductBasketCount,
} from '@/store/BasketClientStore/BasketClientSelectors';

export const BasketBtn = () => {
    const [openBasket, setOpenBasket] = React.useState(false);
    const productsCount = useProductBasketCount();
    const totalCost = useProductBasketCost();

    const onClickBasket = (open: boolean) => {
        setOpenBasket(open);
    };

    return (
        <>
            <div className='header__basket'>
                <HeaderBtnInfo
                    productsCount={productsCount}
                    totalCost={totalCost}
                    onClickBasket={onClickBasket}
                />

                <Basket openBasket={openBasket} onClickBasket={onClickBasket} />
            </div>
        </>
    );
};
