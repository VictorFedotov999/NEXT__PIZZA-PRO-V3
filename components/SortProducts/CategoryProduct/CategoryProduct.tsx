'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CategorySkeleton } from '../../../Shared/Skeletons/CategorySkeleton';
import { getCategorys } from '../../../services/categorys';
import { Category } from '@prisma/client';

export const CategoryProduct = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category');

    const [categorys, setCategorys] = React.useState<Category[]>([]);

    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);
        getCategorys()
            .then((res) => {
                setCategorys(res);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    if (isLoading) {
        return (
            <div className='product__categorie-inner'>
                <CategorySkeleton />
            </div>
        );
    }

    const onClickCategory = (id: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', id.toString());
        router.push(`/?${params.toString()}`);
    };

    return (
        <div className='product__categorie-inner'>
            {categorys.map((category, index: number) => (
                <div
                    key={category.id}
                    onClick={() => onClickCategory(index)}
                    className={
                        currentCategory === index.toString()
                            ? 'product__categorie-text active'
                            : 'product__categorie-text'
                    }
                >
                    {category.title}
                </div>
            ))}
        </div>
    );
};
