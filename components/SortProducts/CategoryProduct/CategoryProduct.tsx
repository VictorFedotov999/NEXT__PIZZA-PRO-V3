'use client';
import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import { CategorySkeleton } from '../../Skeletons/CategorySkeleton';

import { getCategorys } from '../../../services/categorys';

interface ICategoryType {
    id: number;
    title: string;
}

export const CategoryProduct = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category') || '0';
    const [categorys, setCategorys] = React.useState<ICategoryType[]>([]);
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

    const onClickCategory = (index: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', index.toString());
        router.push(`/?${params.toString()}`);
    };

    return (
        <div className='product__categorie-inner'>
            {categorys.map((categor: ICategoryType, index: number) => (
                <div
                    key={index}
                    onClick={() => onClickCategory(index)}
                    className={
                        currentCategory === index.toString()
                            ? 'product__categorie-text active'
                            : 'product__categorie-text'
                    }
                >
                    {categor.title}
                </div>
            ))}
        </div>
    );
};
