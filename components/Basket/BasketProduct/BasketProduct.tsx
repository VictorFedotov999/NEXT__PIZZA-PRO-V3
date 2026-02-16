import Image from 'next/image';
import Product from '../../../public/products/productPizza.png';

export const BasketProduct = ({ product }) => {
    return (
        <>
            <div className='basket__item'>
                <img className='basket__item-img' src={product.imageUrl} alt='' />

                <div className='basket__item__info'>
                    <h1 className='basket__item__info-title'>{product.title}</h1>
                    <p className='basket__item__info-text'> {product.size}см, традиционное тесто</p>
                    <div className='basket__item__count'>
                        <button className='basket__item__minus'>-</button>
                        <h3 className='basket__item__number'>2</h3>
                        <button className='basket__item__plus'>+</button>
                        <h3 className='basket__item__price'>{product.price} ₽</h3>
                    </div>
                </div>
            </div>
        </>
    );
};
