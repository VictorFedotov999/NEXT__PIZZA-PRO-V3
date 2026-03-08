import { Title } from '../../Shared/Title/Title';
import { ClearBasketBtn } from '../ClearBasketBtn/ClearBasketBtn';

import { OrderCartItems } from '../OrderCartItems/OrderCartItems';

export const OrderCart = () => {
    return (
        <>
            <div className='order__cart'>
                <div className='order__decoration'>
                    <div className='order__decoration__basket'>
                        <div className='order__basket__top'>
                            <Title title={'1. Корзина'} />
                            <ClearBasketBtn />
                        </div>
                        <div className='order__items'>
                            <OrderCartItems />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
