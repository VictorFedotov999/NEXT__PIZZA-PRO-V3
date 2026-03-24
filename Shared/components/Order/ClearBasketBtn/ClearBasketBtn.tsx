'use client';

import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { ClearBasketSvg } from './ClearBasketSvg';
import toast from 'react-hot-toast';

export const ClearBasketBtn = () => {
    const clearBaskets = useProductBasketClientStore((state) => state.removeBasketProducts);
    const onClearProducts = () => {
        clearBaskets();
        toast.success('Корзина очищена');
    };
    return (
        <button className='order__basket-btn' onClick={onClearProducts}>
            <ClearBasketSvg />
            Очистить корзину
        </button>
    );
};
