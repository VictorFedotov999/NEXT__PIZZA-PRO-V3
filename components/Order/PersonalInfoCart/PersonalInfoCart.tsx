import { Title } from '../../Shared/Title/Title';

export const PersonalInfoCart = () => {
    return (
        <>
            <div className='order__cart'>
                <Title title={'2. Персональная информация'} />
                <div className='order__personal'>
                    <form className='order__personal-form' action=''>
                        <div className='order__form-inner'>
                            <input className='order__form-input' type='text' placeholder='Имя' />
                            <input
                                className='order__form-input'
                                type='text'
                                placeholder='Фамилия'
                            />
                        </div>
                        <div className='order__form-inner'>
                            <input className='order__form-input' type='text' placeholder='E-Mail' />
                            <input
                                className='order__form-input'
                                type='number'
                                placeholder='Телефон'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
