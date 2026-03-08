import Image from 'next/image';
import BasketIcon from '../../../public/header/headerBtnBasket.svg';
import {
    useStoreProductCount,
    useStoreTotalCost,
} from '@/store/BasketClientStore/BasketClientSelectors';
import { BtnInfoSvg } from './BtnInfoSvg';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const HeaderBtnInfo = ({ onClickBasket }: IProps) => {
    const productCount = useStoreProductCount();
    const totalCost = useStoreTotalCost();
    return (
        <>
            <button className='header__basket-btn' onClick={() => onClickBasket(true)}>
                <p className='header__basket-price'>{totalCost} ₽</p>
                <BtnInfoSvg />
                <p className='header__basket-count'>{productCount}</p>
            </button>
        </>
    );
};
