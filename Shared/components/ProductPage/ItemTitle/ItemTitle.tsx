import { IBasketProduct } from '@/store/BasketClientStore/BasketClientType';
import { Product } from '@prisma/client';
import { AllProductType } from '../../../prisma/prismaType';

interface IProps {
    product: AllProductType;
}

const ItemTitle = ({ product }: IProps) => {
    return (
        <>
            <h1 className='product__info-title'>{product.title}</h1>
        </>
    );
};

export default ItemTitle;
