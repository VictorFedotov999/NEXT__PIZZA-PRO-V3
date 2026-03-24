'use client';

import React from 'react';

import { useClickAway } from 'react-use';
import { ProfileBtnSvg } from './ProfileBtnSvg';
import { useSession } from 'next-auth/react';
import { ProfilePopup } from '../ProfilePopup/ProfilePopup';

export const ProfileBtn = () => {
    const { data: session } = useSession();

    const [openPopup, setOpenPopup] = React.useState<boolean>(false);

    const onClickOpenPopup = () => {
        setOpenPopup(true);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenPopup(false);
    });

    return (
        <>
            {!session ? (
                ''
            ) : (
                <>
                    <div className='header__profile' ref={ref}>
                        <button className='header__profile-btn' onClick={onClickOpenPopup}>
                            <ProfileBtnSvg />
                            <p className='header__profile-text'>Профиль</p>
                        </button>
                        <ProfilePopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
                    </div>
                </>
            )}
        </>
    );
};
