import { IBasketItemsStore } from '@/store/BasketClientStore/BasketClientType';

interface IProps {
    product: IBasketItemsStore;
}

export const BasketProductInfo = ({ product }: IProps) => {
    return (
        <>
            <h1 className='basket__item__info-title'>{product.title}</h1>
            <p className='basket__item__info-text'>
                {product.pizzaSize}см,{product.pizzaType}
            </p>
        </>
    );
};
