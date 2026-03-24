'use client';

import { useStoreTotalCost } from '@/store/BasketClientStore/BasketClientSelectors';

export const ResulPrice = () => {
    const priceOrder = useStoreTotalCost();
    return (
        <>
            <h3 className='order__result-title'>Итого:</h3>
            <h3 className='order__result-price'>{priceOrder} ₽</h3>
        </>
    );
};
