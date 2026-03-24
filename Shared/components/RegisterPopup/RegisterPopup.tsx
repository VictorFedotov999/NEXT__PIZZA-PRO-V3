import { ClousePopup } from '../AuthorizationPopup/ClousePopup/ClousePopup';
import { RegisterForm } from './RegisterForm/RegisterForm';

interface IProps {
    setOpenRegister: (open: boolean) => void;
}

export const RegisterPopup = ({ setOpenRegister }: IProps) => {
    return (
        <>
            <div className='popup-overlay__register'>
                <div className='popup__register'>
                    <ClousePopup clousePopup={setOpenRegister} />
                    <h1 className='register__title'>Регистрация</h1>
                    <RegisterForm />
                </div>
            </div>
        </>
    );
};
