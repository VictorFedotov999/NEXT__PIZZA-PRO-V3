'use client';
import React from 'react';

import { getCategorys } from '../../../services/categorys';

export const CategoryProduct = () => {
    const [category, setCategory] = React.useState(0);

    const [categorys, setCategorys] = React.useState([]);

    React.useEffect(() => {
        getCategorys().then((res) => setCategorys(res));
    }, []);

    const onClickCategory = (index: number) => {
        setCategory(index);
    };

    return (
        <>
            {
                <div className='product__categorie-inner'>
                    {categorys.map((categor, index) => (
                        <div
                            key={index}
                            onClick={() => onClickCategory(index)}
                            className={
                                category === index
                                    ? 'product__categorie-text active'
                                    : 'product__categorie-text'
                            }
                        >
                            {categor.title}
                        </div>
                    ))}
                </div>
            }
        </>
    );
};
