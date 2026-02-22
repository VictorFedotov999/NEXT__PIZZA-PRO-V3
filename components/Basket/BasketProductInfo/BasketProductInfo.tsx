export const BasketProductInfo = ({ product }) => {
    return (
        <>
            <h1 className='basket__item__info-title'>{product.title}</h1>
            <p className='basket__item__info-text'> {product.size}см, традиционное тесто</p>
        </>
    );
};
