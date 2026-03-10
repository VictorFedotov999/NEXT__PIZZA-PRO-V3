import { OrderCart } from '../../../../components/Order/OrderCart/OrderCart';
import { PersonalInfoCart } from '../../../../components/Order/PersonalInfoCart/PersonalInfoCart';
import { DeliveryCart } from '../../../../components/Order/DeliveryCart/DeliveryCart';
import { PayOrder } from '../../../../components/Order/PayOrder/PayOrder';
import Image from 'next/image';
import BackPageIcon from '../../../../public/basket/Black-arrow-left.png';
import Link from 'next/link';
import { FormCart } from '../../../../components/Order/FormCart/FormCart';
const PageOrder = () => {
    return (
        <>
            <section className='order'>
                <div className='container'>
                    <div className='order__inner'>
                        <div className='order__contant'>
                            <h3 className='title'>Оформление заказа</h3>
                            <Link href='/'>
                                <Image src={BackPageIcon} width={30} height={30} alt='Arrow' />
                            </Link>

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
