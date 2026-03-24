import { BasketProductInfo } from '../BasketProductInfo/BasketProductInfo';
import { BasketProductCount } from '../BasketProductCount/BasketProductCount';
import Image from 'next/image';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProduct = ({ product }: IProps) => {
    return (
        <>
            <div className='basket__item'>
                <Image src={product.imageUrl} width={50} height={50} alt='Product-Img' />

                <div className='basket__item__info'>
                    <BasketProductInfo product={product} />
                    <BasketProductCount product={product} />
                </div>
            </div>
        </>
    );
};
