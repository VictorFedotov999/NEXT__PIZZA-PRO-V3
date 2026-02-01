import Image from 'next/image';
import Link from 'next/link';
import { ProductBtnConfigurate } from './ProductBtnConfigurate/ProductBtnConfigurate';

type Props = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export const Product = ({ id, title, description, imageUrl }: Props) => {
    return (
        <Link href={`/prods/${id}`}>
            <div className='item active-setting'>
                <img src={imageUrl} alt='' />

                <h1 className='item-title'>{title}</h1>
                <p className='item-text'>{description}</p>
                <div className='item-bottom'>
                    <p className='item-price'>
                        от <span className='item-price_bold'> 340 ₽</span>
                    </p>
                    <ProductBtnConfigurate />
                </div>
            </div>
        </Link>
    );
};
