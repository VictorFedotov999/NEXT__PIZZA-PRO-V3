'use client';

interface IInput {
    type: string;
    placeholder: string;
    error: any;
    register: any;
    regName: string;
}

export const InputForm = ({ type, placeholder, error, regName, register }: IInput) => {
    return (
        <>
            <div className='inpurt-error'>
                {error && <p className='form-error'>{error}</p>}

                <input
                    className='register__form-input'
                    type={type}
                    placeholder={placeholder}
                    {...register(`${regName}`, {
                        required: 'Поле обязательно для заполнения',

                        ...(type === 'email' && {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Некорректный email',
                            },
                        }),

                        ...(type === 'phone' && {
                            pattern: {
                                value: /^[0123456789]{2,}$/i,
                                message: 'Некорректный номер',
                            },
                        }),
                    })}
                />
            </div>
        </>
    );
};
