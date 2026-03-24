import Link from 'next/link';
import { BasketCostBtn } from './BasketCostBtn';
import { BasketSum } from '../BasketSum/BasketSum';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const BasketCost = ({ onClickBasket }: IProps) => {
    return (
        <>
            <div className='basket__bottom'>
                <div className='basket__bottom__inner'>
                    <BasketSum />

                    <Link href={'/order'} onClick={() => onClickBasket(false)}>
                        <BasketCostBtn />
                    </Link>
                </div>
            </div>
        </>
    );
};
