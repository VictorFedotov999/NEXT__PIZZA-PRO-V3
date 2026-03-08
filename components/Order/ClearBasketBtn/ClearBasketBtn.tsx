'use client';

import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { ClearBasketSvg } from './ClearBasketSvg';

export const ClearBasketBtn = () => {
    const clearBaskets = useProductBasketClientStore((state) => state.removeBasketProducts);

    return (
        <button className='order__basket-btn' onClick={clearBaskets}>
            <ClearBasketSvg />
            Очистить корзину
        </button>
    );
};
