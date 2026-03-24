import { Title } from '../../../title-cart';
import { SearchAddras } from './SearchAddras';

interface IProps {
    register: any;
    formState: any;
}

export const DeliveryCart = ({ register, formState }: IProps) => {
    const addressError = formState.errors['address']?.message;
    const commentError = formState.errors['comment']?.message;
    return (
        <>
            <div className='order__cart'>
                <Title title={'3. Адрес доставки'} />
                <div className='order__delivery'>
                    <h3 className='order__delivery-title'>Введите адрес</h3>
                    <SearchAddras register={register} addressError={addressError} />

                    <div>
                        <h3 className='order__delivery-title'>Комментарий к заказу</h3>
                        {commentError && <p className='form-error'>{commentError}</p>}
                        <textarea
                            className='order__dilivery-textarea'
                            placeholder='Укажите тут дополнительную информацию для курьера'
                            {...register('comment', {
                                required: false,
                                maxLength: {
                                    value: 500,
                                    message: 'Комментарий не должен превышать 500 символов',
                                },
                            })}
                        ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
};
