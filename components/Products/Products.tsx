'use client';
import React from 'react';
import { ProductItem } from './Product/Product';
import { Api } from '../../services/api-client';
import { useSearchParams } from 'next/navigation';
import { Product } from '@prisma/client';

export const Products = () => {
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort') || 'Рейтинг';
    const category = searchParams.get('category') || '0';
    const ingredients = searchParams.get('ingredients') || '';
    const size = searchParams.get('size') || '';
    const type = searchParams.get('type') || '';
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        Api.CategoryProduct(category, sort, ingredients, size, type).then((item) =>
            setProducts(item),
        );
    }, [category, sort, ingredients, size, type]);

    if (products.length === 0) {
        return 'skeleton';
    }

    return (
        <div className='items'>
            {products.map((product, index) => (
                <ProductItem
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    id={product.id}
                    price={product.price}
                />
            ))}
        </div>
    );
};
