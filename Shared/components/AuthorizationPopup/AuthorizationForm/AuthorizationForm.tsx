import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { InputForm } from '../../../Form/input-form';

interface IProps {
    setOpenRegister: (open: boolean) => void;
}

interface IForm {
    email: string;
    password: string;
}

export const AuthorizationForm = ({ setOpenRegister }: IProps) => {
    const { register, handleSubmit, formState } = useForm<IForm>({ mode: 'onChange' });
    const emailError = formState.errors['email']?.message;
    const passwordError = formState.errors['password']?.message;

    const onSubmit = async (data: IForm) => {
        try {
            const resp = await signIn('credentials', { ...data, redirect: false });

            if (!resp?.ok) {
                toast.error('Пользователь не найден');
                throw Error();
            }
            toast.success(`Вы вошли в аккаунт`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form className='popup__form' action='' onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    type='email'
                    placeholder='Email'
                    regName='email'
                    error={emailError}
                    register={register}
                />

                <InputForm
                    type='password'
                    placeholder='Пароль'
                    regName='password'
                    error={passwordError}
                    register={register}
                />

                <div className='popup__form-btns'>
                    <button type='submit' className='popup__form-btn in'>
                        Войти
                    </button>

                    <div
                        className='popup__form-btn authorization'
                        onClick={() => setOpenRegister(true)}
                    >
                        Регистрация
                    </div>
                </div>
            </form>
        </>
    );
};
