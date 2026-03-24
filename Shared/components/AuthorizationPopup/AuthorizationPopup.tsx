import React from 'react';
import { RegisterPopup } from '../RegisterPopup/RegisterPopup';
import { ClousePopup } from './ClousePopup/ClousePopup';
import { AuthorizationForm } from './AuthorizationForm/AuthorizationForm';
import { AuthorizationAccount } from './AuthorizationAccount/AuthorizationAccount';

interface IProps {
    setOpenAuthorization: (open: boolean) => void;
}

export const AuthorizationPopup = ({ setOpenAuthorization }: IProps) => {
    const [openRegister, setOpenRegister] = React.useState<boolean>(false);

    return (
        <>
            <div className='popup-overlay'>
                <div className='popup'>
                    <ClousePopup clousePopup={setOpenAuthorization} />

                    <h1 className='popup-title'>Вход</h1>
                    <AuthorizationForm setOpenRegister={setOpenRegister} />
                    <hr />
                    <AuthorizationAccount setOpenRegister={setOpenRegister} />
                </div>
            </div>

            {openRegister === true ? <RegisterPopup setOpenRegister={setOpenRegister} /> : ''}
        </>
    );
};
