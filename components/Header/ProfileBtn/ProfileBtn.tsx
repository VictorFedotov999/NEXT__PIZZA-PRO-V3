'use client';

import React from 'react';
import Image from 'next/image';
import { useClickAway } from 'react-use';
import ProfileIcon from '../../../public/header/headerBtnProfile.svg';
import { ProfileBtnSvg } from './ProfileBtnSvg';

export const ProfileBtn = () => {
    const settings = ['Настройки', 'Заказы', 'Выйти'];
    const [openPopup, setOpenPopup] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<number>(0);

    const onClickOpenPopup = () => {
        setOpenPopup(true);
    };

    const onClickSetting = (index: number) => {
        setSetting(index);
        setOpenPopup(false);
    };

    const ref = React.useRef(null);
    useClickAway(ref, () => {
        setOpenPopup(false);
    });
    return (
        <>
            <div className='header__profile' ref={ref}>
                <button className='header__profile-btn' onClick={onClickOpenPopup}>
                    <ProfileBtnSvg />
                    <p className='header__profile-text'>Профиль</p>
                </button>

                <div
                    className={openPopup ? 'header__profile_popup active' : 'header__profile_popup'}
                >
                    {settings.map((set, index) => (
                        <h3
                            key={index}
                            onClick={() => onClickSetting(index)}
                            className={
                                setting === index
                                    ? 'header__profile_popup-text active'
                                    : 'header__profile_popup-text'
                            }
                        >
                            {set}
                        </h3>
                    ))}
                </div>
            </div>
            {/* <AuthorizationBtn /> */}
        </>
    );
};
