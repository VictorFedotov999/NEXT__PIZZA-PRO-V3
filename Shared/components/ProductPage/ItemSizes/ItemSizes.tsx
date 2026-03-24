'use client';

import React from 'react';
import { SizeOption } from '@prisma/client';

type PropsType = {
    sizes: SizeOption[];
    sizeOptions: SizeOption[];
    sizeActive: number;
    setSizeAcitve: (index: number) => void;
};

const ItemSizes = ({ sizes, sizeOptions, sizeActive, setSizeAcitve }: PropsType) => {
    const onClickSize = (index: number, isDisabled: boolean) => {
        if (isDisabled) return;
        setSizeAcitve(index);
    };

    return (
        <>
            <div className='product__info-sizes'>
                {sizeOptions.map((option, index: number) => {
                    const isAvailable = sizes.some(
                        (productSize) => productSize.size === option.size,
                    );

                    return (
                        <div
                            key={option.id}
                            onClick={() => onClickSize(index, !isAvailable)}
                            className={`
                            product__info-sizes-text
                            ${sizeActive === index ? 'active' : ''}
                            ${!isAvailable ? 'disabled' : ''}
                        `}
                        >
                            {option.size} см
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ItemSizes;
