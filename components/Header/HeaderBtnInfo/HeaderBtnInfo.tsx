import { BasketSvg } from '../BasketBtn/BasketSvg';

interface IHeaderBtnInfo {
    onClickBasket: (open: boolean) => void;
}

export const HeaderBtnInfo = ({ onClickBasket }: IHeaderBtnInfo) => {
    return (
        <>
            <button className='header__basket-btn' onClick={() => onClickBasket(true)}>
                <p className='header__basket-price'> ₽</p>
                <BasketSvg />
                <p className='header__basket-count'></p>
            </button>
        </>
    );
};
