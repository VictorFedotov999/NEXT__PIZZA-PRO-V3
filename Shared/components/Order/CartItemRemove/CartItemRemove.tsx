import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import toast from 'react-hot-toast';

interface IProps {
    product: IBasketItemsStore;
}

export const CartItemRemove = ({ product }: IProps) => {
    const { removeCartItem } = useProductBasketClientStore();

    const onRemoveProduct = () => {
        removeCartItem(product.id);
        toast.error(`Продукт удален`);
    };

    return (
        <button className='item__remove-btn' onClick={onRemoveProduct}>
            <svg
                className=''
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M0.75 0.75L10.75 10.75M0.75 10.75L10.75 0.75'
                    stroke='#C0C0C0'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </button>
    );
};
