import { Product } from '@prisma/client';

type PropsType = {
    product: Product;
};

const ItemTitle = ({ product }: PropsType) => {
    if (!product) {
        <>ffff</>;
    }

    return (
        <>
            <h1 className='product__info-title'>{product.title}</h1>
        </>
    );
};

export default ItemTitle;
