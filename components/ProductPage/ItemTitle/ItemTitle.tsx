const ItemTitle = ({ product }) => {
    return (
        <>
            <h1 className='product__info-title'>{product?.title}</h1>
        </>
    );
};

export default ItemTitle;
