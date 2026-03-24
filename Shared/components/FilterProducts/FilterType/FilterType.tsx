'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TypeOption } from '@prisma/client';
import { FilterTypeItem } from '../FilterTypeItem/FilterTypeItem';
import { activeCheckbox } from '../../../lib/active-checkbox';

interface IProps {
    types: TypeOption[];
}

export const FilterType = ({ types }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    React.useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedIds.length > 0) {
            params.set('type', selectedIds.join(','));
        } else {
            params.delete('type');
        }

        router.replace(`/?${params.toString()}`);
    }, [selectedIds]);

    const handleToggle = (type: TypeOption) => {
        activeCheckbox(type.type.toString(), setSelectedIds);
    };

    return (
        <>
            <div className='filter__title'>Тип:</div>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {types.map((type) => (
                        <FilterTypeItem
                            key={type.id}
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
