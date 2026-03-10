'use client';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import React from 'react';
import { Title } from '../../../Shared/title-cart';

export const DeliveryCart = () => {
    const [value, setValue] = React.useState('');
    return (
        <>
            <div className='order__cart'>
                <Title title={'3. Адрес доставки'} />
                <div className='order__delivery'>
                    <form className='' action=''>
                        <h3 className='order__delivery-title'>Введите адрес</h3>
                        <AddressSuggestions
                            token='fcdf620d655a307627f7a604d2ff33b7ffd8607e'
                            value={value}
                            onChange={setValue}
                        />

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
