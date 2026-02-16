import Link from 'next/link';

import { product } from '../../../prisma/constans';
import { ProductBtnAdd } from './ProductBtnAdd/ProductBtnAdd';

type Props = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
};

export const ProductItem = ({ id, title, description, imageUrl, price }: Props) => {
    return (
        <Link href={`/prods/${id}`}>
            <div className='item active-setting'>
                <img src={imageUrl} alt='' />

                <h1 className='item-title'>{title}</h1>
                <p className='item-text'>{description}</p>
                <div className='item-bottom'>
                    <p className='item-price'>
                        от <span className='item-price_bold'> {price} ₽</span>
                    </p>

                    <ProductBtnAdd />
                </div>
            </div>
        </Link>
    );
};
