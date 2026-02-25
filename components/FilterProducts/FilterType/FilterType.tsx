'use client';

import React from 'react';
import { TypeOption } from '@prisma/client';
import { FilterTypeItem } from '../FilterTypeItem/FilterTypeItem';
import { getTypes } from '../../../services/productInfo';
import { useRouter, useSearchParams } from 'next/navigation';
import { filtersSkeleton } from '../../../lib/filters-Skeleton';
import { activeCheckbox } from '../../../lib/active-Checkbox';

export const FilterType = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [types, setTypes] = React.useState<TypeOption[]>([]);
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState<Boolean>(true);

    React.useEffect(() => {
        setIsLoading(true);
        getTypes()
            .then((data) => {
                setTypes(data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error)).finally;
    }, []);

    React.useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedIds.length > 0) {
            params.set('type', selectedIds.join(','));
        } else {
            params.delete('type');
        }

        router.push(`/?${params.toString()}`);
    }, [selectedIds]);

    if (isLoading) {
        return filtersSkeleton(2, 'Тип:', 150, 28);
    }

    const handleToggle = (type: TypeOption) => {
        activeCheckbox(type.type.toString(), setSelectedIds);
    };

    return (
        <>
            <div className='filter__title'>Тип:</div>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {types.map((type: TypeOption) => (
                        <FilterTypeItem
                            key={type.type}
                            type={type}
                            checked={selectedIds.includes(type.type)}
                            onChange={() => handleToggle(type)}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};
