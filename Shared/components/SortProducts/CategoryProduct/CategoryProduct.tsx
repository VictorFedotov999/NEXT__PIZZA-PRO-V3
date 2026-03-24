'use client';

import { Category } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';

interface IProps {
    categorys: Category[];
}

export const CategoryProduct = ({ categorys }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category');

    const onClickCategory = (id: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', 0 || id.toString());
        router.replace(`/?${params.toString()}`);
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
