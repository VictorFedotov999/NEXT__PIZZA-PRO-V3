import { BasketInfoBtnClouse } from './BasketInfoBtnClouse';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const BasketInfo = ({ onClickBasket }: IProps) => {
    return (
        <>
            <div className='basket__top'>
                <h3 className='basket__count'>
                    В корзине <span>{} товара</span>
                </h3>
                <div onClick={() => onClickBasket(false)}>
                    <BasketInfoBtnClouse />
                </div>
            </div>
        </>
    );
};
