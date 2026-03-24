import axios from 'axios';

interface IProps {
    price: number;
}

const ItemButton = ({ price }: IProps) => {
    return (
        <>
            <button className='product__btn'>Добавить в корзину за {price}₽</button>
        </>
    );
};

export default ItemButton;
