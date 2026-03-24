import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import { BasketProduct } from '../BasketProduct/BasketProduct';

interface IProps {
    basketProducts: IBasketItemsStore[];
}

export const BasketProducts = ({ basketProducts }: IProps) => {
    return (
        <>
            <div className='basket__content'>
                <div className='basket__items'>
                    {basketProducts.map((product: IBasketItemsStore) => (
                        <BasketProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};
