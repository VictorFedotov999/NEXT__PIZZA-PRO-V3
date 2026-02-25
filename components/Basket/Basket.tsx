'use client';

import { BasketCost } from './BasketCost/BasketCost';
import { BasketInfo } from './BasketInfo/BasketInfo';
import { BasketProducts } from './BasketProducts/BasketProducts';

import { BasketProductEmpty } from './BasketProductEmpty/BasketProductEmpty';

interface IProps {
    openBasket: boolean;
    onClickBasket: (open: boolean) => void;
}

export const Basket = ({ openBasket, onClickBasket }: IProps) => {
    return (
        <>
            <section className={openBasket === true ? 'basket active' : 'basket'}>
                <div className='basket__container'>
                    <>
                        <div className='basket__inner'>
                            <BasketInfo onClickBasket={onClickBasket} />
                            <BasketProducts />
                        </div>
                        <BasketCost onClickBasket={onClickBasket} />
                    </>
                </div>
            </section>
        </>
    );
};
