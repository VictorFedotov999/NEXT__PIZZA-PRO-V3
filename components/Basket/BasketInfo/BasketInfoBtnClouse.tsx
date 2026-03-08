import Image from 'next/image';
import ClouseIcon from '../../../public/deleteX.svg';
import { ClouseSvg } from './ClouseSvg';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const BasketInfoBtnClouse = ({ onClickBasket }: IProps) => {
    return (
        <>
            <button className='basket__clouse' onClick={() => onClickBasket(false)}>
                <ClouseSvg />
            </button>
        </>
    );
};
