'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FilterSizeItem } from '../FilterSizeItem/FilterSizeItem';
import { SizeOption } from '@prisma/client';
import { activeCheckbox } from '../../../lib/active-checkbox';

interface IProps {
    sizes: SizeOption[];
}

export const FilterSize = ({ sizes }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

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

    return (
        <>
            <div className='filter__title'>Размеры:</div>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {sizes.map((size) => (
                        <FilterSizeItem
                            key={size.id}
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
