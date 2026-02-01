import { BasketInfoBtnClouse } from './BasketInfoBtnClouse';

export const BasketInfo = ({ onClickBasket }) => {
    return (
        <>
            <div className='basket__top'>
                <h3 className='basket__count'>
                    В корзине <span>3 товара</span>
                </h3>
                <div onClick={() => onClickBasket(false)}>
                    <BasketInfoBtnClouse />
                </div>
            </div>
        </>
    );
};
