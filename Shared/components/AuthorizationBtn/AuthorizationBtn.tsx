import React from 'react';
import { AuthorizationPopup } from '../AuthorizationPopup/AuthorizationPopup';

export const AuthorizationBtn = () => {
    const [openAuthorization, setOpenAuthorization] = React.useState<boolean>(false);

    return (
        <>
            <button className='header__profile-btn' onClick={() => setOpenAuthorization(true)}>
                <p className='header__profile-text'>Войти</p>
            </button>
            {openAuthorization === true ? (
                <AuthorizationPopup setOpenAuthorization={setOpenAuthorization} />
            ) : (
                ''
            )}
        </>
    );
};
