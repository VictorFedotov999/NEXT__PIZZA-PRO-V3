'use client';

import { EmptyBtn } from './EmptyBtn';
import { EmptyInfo } from './EmptyInfo';

interface IProps {
    onClickBasket: (open: boolean) => void;
}

export const BasketProductEmpty = ({ onClickBasket }: IProps) => {
    return (
        <>
            <div className='basket__item-empty '>
                <EmptyInfo />
                <EmptyBtn onClickBasket={onClickBasket} />
            </div>
        </>
    );
};
