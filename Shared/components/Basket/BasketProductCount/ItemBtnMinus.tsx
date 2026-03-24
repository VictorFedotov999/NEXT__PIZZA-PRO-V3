import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
    handleMinusProduct: () => void;
}

export const ItemBtnMinus = ({ product, handleMinusProduct }: IProps) => {
    return (
        <>
            <button
                className={'basket__item__minus'}
                disabled={product.quantity === 1}
                onClick={handleMinusProduct}
            >
                -
            </button>
        </>
    );
};
