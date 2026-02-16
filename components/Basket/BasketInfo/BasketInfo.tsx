import { BasketInfoBtnClouse } from './BasketInfoBtnClouse';

type PropsType = {
    onClickBasket: (open: boolean) => void;
};

export const BasketInfo = ({ onClickBasket }: PropsType) => {
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
