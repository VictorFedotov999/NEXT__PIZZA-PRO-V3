import { Product } from './Product/Product';
import React from 'react';

// import { getProducts } from '../../services/prod';
import { prisma } from '../../prisma/prisma-client';

export const Products = async () => {
    // const [products, setProducts] = React.useState([]);
    // React.useEffect(() => {
    //     getProducts().then((res) => setProducts(res));
    // }, []);

    // console.log(products);

    const products = await prisma.product.findMany({});

    return (
        <>
            <div className='items'>
                {products.map((product, index) => (
                    <Product
                        key={`${product.title} + ${index}`}
                        title={product.title}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        id={product.id}
                    />
                ))}
            </div>
        </>
    );
};
