'use client';

import { useSearchParams, useRouter } from 'next/navigation';

import React from 'react';

// type PropsType = {
//     size: sizeType;
// };

// type sizeType = {
//     id: number;
//     size: number;
// };

export const FilterSizeItem = ({ size, checked, onChange }) => {
    return (
        <>
            <li className='filter__type-item'>
                <input
                    checked={checked}
                    onChange={onChange}
                    className='filter__type-text'
                    type='checkbox'
                    id={`filterCheckbox${size.id}`}
                />
                <label htmlFor={`filterCheckbox${size.id}`}>{size.size} см</label>
            </li>
        </>
    );
};
