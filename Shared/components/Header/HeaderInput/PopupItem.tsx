import Image from 'next/image';
import Link from 'next/link';
import { ProductIdType } from '../../../prisma/prismaType';

interface IProps {
    product: ProductIdType;
    setFocused: (type: boolean) => void;
}

export const PopupItem = ({ product, setFocused }: IProps) => {
    return (
        <>
            <Link key={product.description} href={`/prods/${product.id}`}>
                <div className='header__popup__item' onClick={() => setFocused(false)}>
                    <Image
                        className='header__popup__item-img'
                        src={product.image}
                        alt='Product'
                        width={30}
                        height={30}
                    />

                    <h3 className='header__popup__item-title'>{product.title}</h3>
                    <h3 className='header__popup__item-price'>{product.price} ₽</h3>
                </div>
            </Link>
        </>
    );
};
