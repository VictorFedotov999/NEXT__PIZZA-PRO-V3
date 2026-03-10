'use client';

import React from 'react';
import { HeaderBtnInfo } from '../HeaderBtnInfo/HeaderBtnInfo';
import { Basket } from '../../Basket/Basket';
import { AuthorizationBtn } from '../../AuthorizationBtn/AuthorizationBtn';
import { useSession, signIn } from 'next-auth/react';

export const BasketBtn = () => {
    const [openBasket, setOpenBasket] = React.useState<boolean>(false);
    const { data: session } = useSession();
    console.log(session, 'fff');

    const onClickBasket = (open: boolean) => {
        setOpenBasket(open);
    };

    return (
        <>
            {!session ? (
                <div onClick={() => signIn('github', { callbackUrl: '/', redirect: true })}>
                    <AuthorizationBtn />
                </div>
            ) : (
                <div className='header__basket'>
                    <HeaderBtnInfo onClickBasket={onClickBasket} />
                    <Basket openBasket={openBasket} onClickBasket={onClickBasket} />
                </div>
            )}
        </>
    );
};
