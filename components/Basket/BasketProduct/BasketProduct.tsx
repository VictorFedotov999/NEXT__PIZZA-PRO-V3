'use client';

import { plusProduct, removeProduct } from '@/store/BasketClientStore/BasketClientSelectors';
import { BasketProductInfo } from '../BasketProductInfo/BasketProductInfo';
import { BasketProductCount } from '../BasketProductCount/BasketProductCount';
import { addProductBasket, removeProductBasket } from '../../../utils/addProductBasket';
import { IBasketProduct } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketProduct;
}

export const BasketProduct = ({ product }: IProps) => {
    const onClickremoveProduct = () => {
        removeProductBasket({
            product,
            func: removeProduct,
        });
    };

    const onClickPlusProduct = () => {
        removeProductBasket({
            product,
            func: plusProduct,
        });
    };

    return (
        <>
            <div className='basket__item'>
                <img className='basket__item-img' src={product.imageUrl} alt='' />

                <div className='basket__item__info'>
                    <BasketProductInfo product={product} />
                    <BasketProductCount
                        product={product}
                        onClickPlusProduct={onClickPlusProduct}
                        onClickremoveProduct={onClickremoveProduct}
                    />
                </div>
            </div>
        </>
    );
};
