'use client';
import axios from 'axios';

const ItemButton = ({ productId }) => {
    const addToBasket = () => {
        try {
            axios.post('/api/productss', {
                userId: 1,
                productId: 1,
            });

            alert('Товар добавлен в корзину');
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
            <div onClick={addToBasket}>
                <button className='product__btn'>Добавить в корзину за 799₽</button>
            </div>
        </>
    );
};

export default ItemButton;
