import { useStoreProductCount } from '@/store/BasketClientStore/BasketClientSelectors';
import { BasketInfoBtnClouse } from './BasketInfoBtnClouse';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const BasketInfo = ({ onClickBasket }: IProps) => {
    const productCount = useStoreProductCount();
    return (
        <>
            <div className='basket__top'>
                <h3 className='basket__count'>
                    В корзине <span>{productCount} товара</span>
                </h3>

                <BasketInfoBtnClouse onClickBasket={onClickBasket} />
            </div>
        </>
    );
};
