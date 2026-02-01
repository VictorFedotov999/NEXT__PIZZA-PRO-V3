const ItemImg = ({ product }) => {
    return (
        <>
            {' '}
            <div className='product__img'>
                <img className='product__img-product' src={product?.imageUrl} alt='' />
            </div>
        </>
    );
};

export default ItemImg;
