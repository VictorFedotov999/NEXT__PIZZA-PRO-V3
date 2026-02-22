import { INewProduct } from '@/store/BasketClientStore/BasketClientType';
import { BasketDeleteProduct } from '../BasketDeleteProduct/BasketDeleteProduct';

interface BasketProductCount {
    product: INewProduct;
    onClickPlusProduct: () => void;
    onClickremoveProduct: () => void;
}

export const BasketProductCount = ({
    product,
    onClickPlusProduct,
    onClickremoveProduct,
}: BasketProductCount) => {
    return (
        <>
            <div className='basket__item__count'>
                <button className='basket__item__minus'>-</button>
                <h3 className='basket__item__number'>{product.count}</h3>
                <button className='basket__item__plus' onClick={onClickPlusProduct}>
                    +
                </button>
                <h3 className='basket__item__price'>{product.price} ₽</h3>
                <div onClick={onClickremoveProduct}>
                    <BasketDeleteProduct />
                </div>
            </div>
        </>
    );
};
