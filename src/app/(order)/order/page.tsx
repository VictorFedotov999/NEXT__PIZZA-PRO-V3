import { BackBtn } from '../../../../Shared/components/Order/BackBtn/BackBtn';
import { FormCart } from '../../../../Shared/components/Order/FormCart/FormCart';
import { OrderCart } from '../../../../Shared/components/Order/OrderCart/OrderCart';
import { PayOrder } from '../../../../Shared/components/Order/PayOrder/PayOrder';

const PageOrder = () => {
    return (
        <>
            <section className='order'>
                <div className='container'>
                    <div className='order__inner'>
                        <div className='order__contant'>
                            <h3 className='title'>Оформление заказа</h3>
                            <BackBtn />
                            <OrderCart />
                            <FormCart />
                        </div>
                        <PayOrder />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageOrder;
