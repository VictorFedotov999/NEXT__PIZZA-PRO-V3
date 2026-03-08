import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import Image from 'next/image';
import { CartItemInfo } from '../../CartItemInfo/CartItemInfo';
import { CartItemCount } from '../../CartItemCount/CartItemCount';
import { CartItemRemove } from '../../CartItemRemove/CartItemRemove';
interface IProps {
    product: IBasketItemsStore;
}

export const OrderCartItem = ({ product }: IProps) => {
    return (
        <div className='order__item'>
            <Image
                className='order__item-img'
                src={product.imageUrl}
                width={30}
                height={30}
                alt='Product'
            />

            <CartItemInfo product={product} />
            <CartItemCount product={product} />
            <CartItemRemove product={product} />
        </div>
    );
};
