'use client';

import React from 'react';
import { ProductItem as ItemProduct } from './Product/Product';
import { Api } from '../../services/api-client';
import { useSearchParams } from 'next/navigation';
import { ProductSkeleton } from '../../Shared/Skeletons/ProductSkeleton';
import { ProductIdType } from '../../prisma/prismaType';
import Image from 'next/image';
import NotProductImg from '../../public/not-find/Not-Product.png';

export const Products = () => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || 'Рейтинг';
    const category = searchParams.get('category') || '0';
    const ingredients = searchParams.get('ingredients') || '';
    const size = searchParams.get('size') || '';
    const type = searchParams.get('type') || '';

    console.log('category', category);

    const limitProduct = 12;
    const skeletonProduct = Array(limitProduct).fill(0);

    const [products, setProducts] = React.useState<ProductIdType[]>([]);
    console.log('products', products);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);
        Api.filteringProducts(category, sort, ingredients, size, type)
            .then((item) => {
                setProducts(item);
                setIsLoading(false);
            })
            .catch((error) => console.log('error:', error));
    }, [category, sort, ingredients, size, type]);

    if (isLoading) {
        return (
            <div className='items'>
                {skeletonProduct.map((_, index: number) => (
                    <ProductSkeleton key={`${_}-${index}`} />
                ))}
                ;
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <>
                <div className='not__product'>
                    <Image
                        className='
                    not__product-img'
                        src={NotProductImg}
                        width={400}
                        height={400}
                        alt='Not-Product'
                    />
                    <h1 className='not__product-text'> Не найдено</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='items'>
                <div className='items '>
                    {products.map((product) => (
                        <ItemProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};
