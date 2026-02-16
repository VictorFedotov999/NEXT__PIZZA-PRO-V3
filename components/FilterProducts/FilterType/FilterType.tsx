'use client';

import React from 'react';
import { TypeOption } from '@prisma/client';
import { FilterTypeItem } from '../FilterTypeItem/FilterTypeItem';
import { getTypes } from '../../../services/types';
import { useRouter, useSearchParams } from 'next/navigation';

export const FilterType = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [types, setTypes] = React.useState([]);
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    console.log();
    React.useEffect(() => {
        getTypes().then((data) => setTypes(data));
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

    const handleToggle = (type: TypeOption) => {
        setSelectedIds((prev) =>
            prev.includes(type.type) ? prev.filter((t) => t !== type.type) : [...prev, type.type],
        );
    };
    return (
        <>
            <div className='filter__ingredients-title'>Тип:</div>
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
