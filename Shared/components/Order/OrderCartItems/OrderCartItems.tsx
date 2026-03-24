'use client';

import { useFetchCartItems, useStoreItems } from '@/store/BasketClientStore/BasketClientSelectors';
import { OrderCartItem } from './OrderCartItem/OrderCartItem';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import React from 'react';
import { OrderItemSkeleton } from '../../../Skeletons/OrderItemSkeleton';

export const OrderCartItems = () => {
    const basketProducts = useStoreItems();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);
        useFetchCartItems();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <OrderItemSkeleton />;
    }

    return (
        <>
            {basketProducts.map((product: IBasketItemsStore) => (
                <OrderCartItem key={product.id} product={product} />
            ))}
        </>
    );
};
