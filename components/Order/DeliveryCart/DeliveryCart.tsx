import { Title } from '../../Shared/Title/Title';

export const DeliveryCart = () => {
    return (
        <>
            <div className='order__cart'>
                <Title title={'3. Адрес доставки'} />
                <div className='order__delivery'>
                    <form className='' action=''>
                        <h3 className='order__delivery-title'>Введите адрес</h3>
                        <input className='order__delivery-input' type='text' />
                        <div>
                            <h3 className='order__delivery-title'>Комментарий к заказу</h3>
                            <textarea
                                className='order__dilivery-textarea'
                                placeholder='Укажите тут дополнительную информацию для курьера'
                                name=''
                                id=''
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
