import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { axionsInstatce } from '../../../../services/instance';
import { InputForm } from '../../../Form/input-form';

interface IForm {
    surname: string;
    name: string;
    patronymic: string;
    email: string;
    password: string;
}

export const RegisterForm = () => {
    const { register, handleSubmit, formState } = useForm<IForm>({
        mode: 'onChange',
    });

    const famaliError = formState.errors['surname']?.message;
    const nameError = formState.errors['name']?.message;
    const otchestvoError = formState.errors['patronymic']?.message;
    const emailError = formState.errors['email']?.message;
    const passwordError = formState.errors['password']?.message;

    const onSubmit = async (data: IForm) => {
        try {
            const response = await axionsInstatce.post('/api/register', {
                surname: data.surname,
                name: data.name,
                patronymic: data.patronymic,
                email: data.email,
                password: data.password,
            });

            if (response.data.newUser) {
                const result = await signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });

                toast.success(`Добро пожаловать, ${data.name}`);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form className='register__form' action='' onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    type='text'
                    placeholder='Фамилия'
                    regName='surname'
                    error={famaliError}
                    register={register}
                />

                <InputForm
                    type='text'
                    placeholder='Имя'
                    regName='name'
                    error={nameError}
                    register={register}
                />

                <InputForm
                    type='text'
                    placeholder='Отчество'
                    regName='patronymic'
                    error={otchestvoError}
                    register={register}
                />

                <InputForm
                    type='email'
                    placeholder='Email'
                    regName='email'
                    error={emailError}
                    register={register}
                />

                <InputForm
                    type='text'
                    placeholder='Пароль'
                    regName='password'
                    error={passwordError}
                    register={register}
                />

                <button className='register__form-btn' type='submit'>
                    Зарегистрироваться
                </button>
            </form>
        </>
    );
};
