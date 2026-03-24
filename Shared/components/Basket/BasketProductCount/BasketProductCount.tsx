import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';
import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';
import { ItemBtnMinus } from './ItemBtnMinus';
import { ItemBtnPlus } from './ItemBtnPlus';
import { ItemBtnRemove } from './ItemBtnRemove';
import toast from 'react-hot-toast';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProductCount = ({ product }: IProps) => {
    const { removeCartItem, increaseCartItem } = useProductBasketClientStore();

    const onRemoveProduct = () => {
        removeCartItem(product.id);
        toast.success(`Товар удален`);
    };

    const handlePlusProduct = () => {
        const count = product.quantity + 1;
        increaseCartItem(product.id, count);
    };

    const handleMinusProduct = () => {
        const count = product.quantity - 1;
        increaseCartItem(product.id, count);
    };

    return (
        <>
            <div className='basket__item__count'>
                <ItemBtnMinus product={product} handleMinusProduct={handleMinusProduct} />

                <h3 className='basket__item__number'>{product.quantity}</h3>
                <ItemBtnPlus handlePlusProduct={handlePlusProduct} />

                <h3 className='basket__item__price'>{product.price} ₽</h3>
                <ItemBtnRemove onRemoveProduct={onRemoveProduct} />
            </div>
        </>
    );
};
