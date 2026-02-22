import Link from 'next/link';
import { ProductBtnAdd } from './ProductBtnAdd/ProductBtnAdd';
import { Product } from '@prisma/client';
import Image from 'next/image';
interface IProps {
    product: Product;
}

export const ProductItem = ({ product }: IProps) => {
    const { id, title, description, imageUrl, price } = product;
    return (
        <Link href={`/prods/${id}`}>
            <div className='item active-setting'>
                <div className='item-bg'>
                    <Image className='item-img' src={imageUrl} alt='' width={240} height={240} />
                </div>
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
