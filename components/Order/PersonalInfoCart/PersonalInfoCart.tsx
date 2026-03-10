'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Title } from '../../../Shared/title-cart';
import { Form_Input } from '../../../Shared/Form/formInput';

export interface IForm {
    Имя: string;
    Фамилия: string;
    email: string;
    Телефон: string;
}

export const PersonalInfoCart = () => {
    const { handleSubmit, formState, register } = useForm<IForm>({
        mode: 'onChange',
    });
    const nameError = formState.errors['Имя']?.message;
    const surnameError = formState.errors['Фамилия']?.message;
    const emailError = formState.errors['email']?.message;

    const phoneError = formState.errors['Телефон']?.message;
    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className='order__cart'>
                <Title title={'2. Персональная информация'} />
                <div className='order__personal'>
                    <form className='order__personal-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='order__form-inner'>
                            <Form_Input
                                name='Имя'
                                type='text'
                                placeholder='Имя'
                                error={nameError}
                                titleError='Ошибка'
                                register={register}
                            />
                            <Form_Input
                                name='Фамилия'
                                type='text'
                                placeholder='Фамилия'
                                error={surnameError}
                                titleError='Ошибка'
                                register={register}
                            />
                        </div>
                        <div className='order__form-inner'>
                            <Form_Input
                                name='email'
                                type='email'
                                placeholder='E-mail'
                                error={emailError}
                                titleError='Ошибка'
                                register={register}
                            />

                            <Form_Input
                                name='Телефон'
                                type='tel'
                                placeholder='Телефон'
                                error={phoneError}
                                titleError='Ошибка'
                                register={register}
                            />
                        </div>
                    </form>
                    <button type='submit'>send</button>
                </div>
            </div>
        </>
    );
};
