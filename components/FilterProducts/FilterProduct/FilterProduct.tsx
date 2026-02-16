'use client';

import React from 'react';

import { FilterSizeItem } from '../FilterSizeItem/FilterSizeItem';
import { SizeOption } from '@prisma/client';

import { useSearchParams, useRouter } from 'next/navigation';
import { getSizes } from '../../../services/sizes';

export const FilterSize = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [sizess, setSizes] = React.useState([]);
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    React.useEffect(() => {
        getSizes().then((res) => setSizes(res));
    }, []);

    React.useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedIds.length > 0) {
            params.set('size', selectedIds.join(','));
        } else {
            params.delete('size');
        }

        router.replace(`/?${params.toString()}`);
    }, [selectedIds]);

    const handleToggle = (size) => {
        const value = size.size.toString();

        setSelectedIds((prev) =>
            prev.includes(value) ? prev.filter((id) => id !== value) : [...prev, value],
        );
    };
    return (
        <>
            <div className='filter__ingredients-title'>Размеры:</div>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {sizess.map((size: SizeOption) => (
                        <FilterSizeItem
                            key={size.size}
                            size={size}
                            checked={selectedIds.includes(size.size.toString())}
                            onChange={() => handleToggle(size)}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};
