'use client';
import React from 'react';

import { TypeOption } from '@prisma/client';

type PropsType = {
    types: TypeOption[];
    typeOptions: TypeOption[];
    typeActive: number;
    setTypeActive: (index: number) => void;
};

const ItemType = ({ types, typeOptions, typeActive, setTypeActive }: PropsType) => {
    const onClickType = (index: number, isDisabled: boolean) => {
        if (isDisabled) return;
        setTypeActive(index);
    };

    return (
        <>
            <div className='product__info-types'>
                {typeOptions.map((option, index: number) => {
                    const isAvailable = types.some(
                        (productType) => productType.type === option.type,
                    );

                    return (
                        <div
                            key={option.id}
                            onClick={() => onClickType(index, !isAvailable)}
                            className={`
                            product__info-sizes-text
                            ${typeActive === index ? 'active' : ''}
                            ${!isAvailable ? 'disabled' : ''}
                        `}
                        >
                            {option.type}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default ItemType;
