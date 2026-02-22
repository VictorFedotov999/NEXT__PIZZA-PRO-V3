'use client';

import React from 'react';
import { FilterSizeItem } from '../FilterSizeItem/FilterSizeItem';
import { SizeOption } from '@prisma/client';
import { useSearchParams, useRouter } from 'next/navigation';
import { getSizes } from '../../../services/sizes';
import { filtersSkeleton } from '../../../utils/filtersSkeleton';
import { activeCheckbox } from '../../../utils/activeCheckbox';

export const FilterSize = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [sizess, setSizes] = React.useState<SizeOption[]>([]);

    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);
        getSizes()
            .then((size) => {
                setSizes(size);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
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

    const handleToggle = (size: SizeOption) => {
        activeCheckbox(size.size.toString(), setSelectedIds);
    };

    if (isLoading) {
        return filtersSkeleton(3, 'Размеры:', 150, 26);
    }
    return (
        <>
            <div className='filter__title'>Размеры:</div>
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
