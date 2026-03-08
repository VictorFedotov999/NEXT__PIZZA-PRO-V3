import Link from 'next/link';
import { ProductBtnAdd } from './ProductBtnAdd/ProductBtnAdd';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ProductIdType } from '../../../prisma/prismaType';

interface IProps {
    product: ProductIdType;
}

export const ProductItem = ({ product }: IProps) => {
    return (
        <Link href={`/prods/${product.id}`}>
            <div className='item active-setting'>
                <div className='item-bg'>
                    <Image
                        className='item-img'
                        src={product.image}
                        alt='Product'
                        width={240}
                        height={240}
                    />
                </div>
                <h1 className='item-title'>{product.title}</h1>
                <p className='item-text'>{product.description}</p>
                <div className='item-bottom'>
                    <p className='item-price'>
                        от <span className='item-price_bold'>{product.price} ₽</span>
                    </p>

                    <ProductBtnAdd />
                </div>
            </div>
        </Link>
    );
};
