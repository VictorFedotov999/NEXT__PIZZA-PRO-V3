'use Client';

import { useForm } from 'react-hook-form';
interface IProps {
    name: string;
    error?: any;
    titleError: string;
    type: string;
    placeholder: string;
    register: any;
}

export const Form_Input = ({ error, titleError, type, placeholder, register, name }: IProps) => {
    return (
        <>
            {error && <p className='form-error'>{error}</p>}
            <input
                className='order__form-input'
                type={type}
                placeholder={placeholder}
                {...register(name, {
                    required: 'Поле обязательно для заполнения',
                    ...(name === 'email' && {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Некорректный email',
                        },
                    }),
                })}
            />
        </>
    );
};
