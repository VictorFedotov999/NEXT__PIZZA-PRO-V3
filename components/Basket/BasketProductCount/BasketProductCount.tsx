import { BasketDeleteProduct } from '../BasketDeleteProduct/BasketDeleteProduct';

interface IProps {
    quantity: number;
    price: number;
}

export const BasketProductCount = ({ product }: IProps) => {
    return (
        <>
            <div className='basket__item__count'>
                <button className='basket__item__minus'>-</button>
                <h3 className='basket__item__number'>{product.quantity}</h3>
                <button className='basket__item__plus'>+</button>
                <h3 className='basket__item__price'>{product.price} ₽</h3>
                <div>
                    <BasketDeleteProduct />
                </div>
            </div>
        </>
    );
};
