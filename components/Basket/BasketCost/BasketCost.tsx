import Link from 'next/link';
import { BasketCostBtn } from './BasketCostBtn';
import { BasketSum } from '../BasketSum/BasketSum';

interface IProps {
    onClickBasket: (open: boolean) => void;
    totalCost: number;
}

export const BasketCost = ({ onClickBasket, totalCost }: IProps) => {
    return (
        <>
            <div className='basket__bottom'>
                <div className='basket__bottom__inner'>
                    <BasketSum totalCost={totalCost} />

                    <Link href={'/order'} onClick={() => onClickBasket(false)}>
                        <BasketCostBtn />
                    </Link>
                </div>
            </div>
        </>
    );
};
