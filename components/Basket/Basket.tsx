import React from 'react';
import { BasketCost } from './BasketCost/BasketCost';

import { BasketInfo } from './BasketInfo/BasketInfo';
import { BasketProducts } from './BasketProducts/BasketProducts';
import { useClickAway } from 'react-use';

export const Basket = ({ openBasket, onClickBasket }) => {
    const ref = React.useRef(null);
    useClickAway(ref, () => {
        onClickBasket(false);
    });

    return (
        <>
            <section className={openBasket === true ? 'basket active' : 'basket'} ref={ref}>
                <div className='basket__container'>
                    <div className='basket__inner'>
                        <BasketInfo onClickBasket={onClickBasket} />
                        <BasketProducts />
                    </div>
                    <BasketCost onClickBasket={onClickBasket} />
                </div>
            </section>
        </>
    );
};
