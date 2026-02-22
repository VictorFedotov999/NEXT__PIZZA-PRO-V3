import { BasketSvg } from '../BasketBtn/BasketSvg';

interface IHeaderBtnInfo {
    totalCost: number;
    productsCount: number;
    onClickBasket: (open: boolean) => void;
}

export const HeaderBtnInfo = ({ totalCost, productsCount, onClickBasket }: IHeaderBtnInfo) => {
    return (
        <>
            <button className='header__basket-btn' onClick={() => onClickBasket(true)}>
                <p className='header__basket-price'>{totalCost} ₽</p>
                <BasketSvg />
                <p className='header__basket-count'>{productsCount}</p>
            </button>
        </>
    );
};
