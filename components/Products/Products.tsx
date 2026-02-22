'use client';
import React from 'react';
import { ProductItem } from './Product/Product';
import { Api } from '../../services/api-client';
import { notFound, useSearchParams } from 'next/navigation';
import { Product } from '@prisma/client';
import { ProductSkeleton } from '../Skeletons/ProductSkeleton';

export const Products = () => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || 'Рейтинг';
    const category = searchParams.get('category') || '0';
    const ingredients = searchParams.get('ingredients') || '';
    const size = searchParams.get('size') || '';
    const type = searchParams.get('type') || '';

    const limitProduct = 12;
    const skeletonProduct = Array(limitProduct).fill(0);

    const [products, setProducts] = React.useState<Product[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);
        Api.CategoryProduct(category, sort, ingredients, size, type)
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
        return 'Ничего не найдено';
    }

    return (
        <div className='items '>
            {products.map((product, index) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
    );
};
