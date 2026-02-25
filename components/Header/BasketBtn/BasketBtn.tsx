'use client';

import React from 'react';
import { HeaderBtnInfo } from '../HeaderBtnInfo/HeaderBtnInfo';
import { Basket } from '../../Basket/Basket';

export const BasketBtn = () => {
    const [openBasket, setOpenBasket] = React.useState<boolean>(false);

    const onClickBasket = (open: boolean) => {
        setOpenBasket(open);
    };

    return (
        <>
            <div className='header__basket'>
                <HeaderBtnInfo onClickBasket={onClickBasket} />

                <Basket openBasket={openBasket} onClickBasket={onClickBasket} />
            </div>
        </>
    );
};
