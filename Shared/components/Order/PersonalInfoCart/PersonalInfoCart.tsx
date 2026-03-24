import { InputForm } from '../../../Form/input-form';
import { Title } from '../../../title-cart';

interface IProps {
    register: any;
    formState: any;
}

export const PersonalInfoCart = ({ register, formState }: IProps) => {
    const nameError = formState.errors['name']?.message;
    const famaliError = formState.errors['surname']?.message;
    const emailError = formState.errors['email']?.message;
    const phoneError = formState.errors['phone']?.message;

    return (
        <>
            <div className='order__cart'>
                <Title title={'2. Персональная информация'} />
                <div className='order__personal'>
                    <div className='order__form-inner'>
                        <div className=''>
                            <InputForm
                                type={'text'}
                                placeholder={'Имя'}
                                regName='name'
                                error={nameError}
                                register={register}
                            />
                        </div>

                        <InputForm
                            type={'text'}
                            placeholder={'Фамилия'}
                            regName='surname'
                            error={famaliError}
                            register={register}
                        />

                        <InputForm
                            type={'email'}
                            placeholder={'Email'}
                            regName='email'
                            error={emailError}
                            register={register}
                        />
                        <InputForm
                            type={'phone'}
                            placeholder={'Телефон'}
                            regName='phone'
                            error={phoneError}
                            register={register}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
