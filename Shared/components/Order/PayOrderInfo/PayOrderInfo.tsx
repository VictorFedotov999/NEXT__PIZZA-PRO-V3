import Image from 'next/image';
import BoxIcon from '../../../../public/order/box.svg';
import ProcentIcon from '../../../../public/order/procent.svg';
import CarIcon from '../../../../public/order/car.svg';
export const PayOrderInfo = () => {
    return (
        <>
            <div className='order__result-contant'>
                <div className='order__result-cost'>
                    <h4 className='order__result-text'>
                        <Image
                            className='order__result-icon'
                            src={BoxIcon}
                            alt='BoxIcon'
                            width={20}
                            height={20}
                        />
                        Стоимость товаров:
                    </h4>
                    <h4 className='order__result-itog'>2005 ₽</h4>
                </div>
                <div className='order__result-cost'>
                    <h4 className='order__result-text'>
                        <Image
                            className='order__result-icon'
                            src={ProcentIcon}
                            alt='ProcentIcon'
                            width={20}
                            height={20}
                        />
                        Налоги:
                    </h4>
                    <h4 className='order__result-itog'>240 ₽</h4>
                </div>
                <div className='order__result-cost'>
                    <h4 className='order__result-text'>
                        <Image
                            className='order__result-icon'
                            src={CarIcon}
                            alt='ProcentIcon'
                            width={20}
                            height={20}
                        />
                        Доставка:
                    </h4>
                    <h4 className='order__result-itog'>120 ₽</h4>
                </div>
            </div>
        </>
    );
};
