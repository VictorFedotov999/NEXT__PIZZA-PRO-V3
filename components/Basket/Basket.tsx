'use client';
import React from 'react';
import { BasketCost } from './BasketCost/BasketCost';

import { BasketInfo } from './BasketInfo/BasketInfo';
import { BasketProducts } from './BasketProducts/BasketProducts';
import { useClickAway } from 'react-use';
import { prisma } from '../../prisma/prisma-client';
import { Api } from '../../services/api-client';

type PropsType = {
    openBasket: boolean;
    onClickBasket: (open: boolean) => void;
};

export const Basket = ({ openBasket, onClickBasket }: PropsType) => {
    const [productsClient, setProductsClient] = React.useState([]);
    const ref = React.useRef(null);
    useClickAway(ref, () => {
        onClickBasket(false);
    });

    React.useEffect(() => {
        Api.ProductClient().then((res) => setProductsClient(res));
    }, []);

    return (
        <>
            <section className={openBasket === true ? 'basket active' : 'basket'} ref={ref}>
                <div className='basket__container'>
                    <div className='basket__inner'>
                        <BasketInfo onClickBasket={onClickBasket} />
                        <BasketProducts productsClient={productsClient} />
                    </div>
                    <BasketCost onClickBasket={onClickBasket} />
                </div>
            </section>
        </>
    );
};
