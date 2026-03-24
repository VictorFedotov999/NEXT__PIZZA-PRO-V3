import Image from 'next/image';
import BasketEmptyImg from '../../../../public/basket/basket-empty.png';

export const EmptyInfo = () => {
    return (
        <>
            <Image className='basket__empty-img' src={BasketEmptyImg} alt='Basket-Empty-Img' />
            <h3 className='basket__empty-title'>Корзина пустая</h3>
            <p className='basket__empty-text'>Добавьте хотя бы одну пиццу, чтобы совершить заказ</p>
        </>
    );
};
