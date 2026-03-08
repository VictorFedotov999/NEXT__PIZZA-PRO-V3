import { EmptyBtnSvg } from './EmptyBtnSvg';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const EmptyBtn = ({ onClickBasket }: IProps) => {
    return (
        <>
            <button className='basket__empty-button' onClick={() => onClickBasket(false)}>
                <EmptyBtnSvg />
                Вернуть на главную
            </button>
        </>
    );
};
