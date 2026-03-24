'use client';

import { useForm, FormProvider } from 'react-hook-form';

import { PersonalInfoCart } from '../PersonalInfoCart/PersonalInfoCart';
import { DeliveryCart } from '../DeliveryCart/DeliveryCart';

export interface IForm {
    name: string;
    surname: string;
    email: string;
    phone: number;
    address: string;
    comment: string;
}

export const FormCart = () => {
    const methods = useForm<IForm>({
        mode: 'onChange',
    });
    const { register, formState, handleSubmit } = methods;

    const onSubmit = (data: IForm) => {
        console.log(data);
    };

    return (
        <>
            <FormProvider {...methods}>
                <form action='' onSubmit={handleSubmit(onSubmit)}>
                    <PersonalInfoCart register={register} formState={formState} />
                    <DeliveryCart register={register} formState={formState} />

                    <button className='order__promo-btn' type='submit'>
                        Перейти к оплате
                    </button>
                </form>
            </FormProvider>
        </>
    );
};
