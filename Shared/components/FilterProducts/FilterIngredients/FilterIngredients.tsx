'use client';

import React from 'react';
import { FilterIngredientItem } from '../FilterIngredientItem/FilterIngredientItem';

import { Ingredient } from '@prisma/client';
import { useSearchParams, useRouter } from 'next/navigation';
import { activeCheckbox } from '../../../lib/active-checkbox';

interface IProps {
    ingredients: Ingredient[];
}

export const FilterIngredients = ({ ingredients }: IProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [showAll, setShowAll] = React.useState<boolean>(false);

    React.useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedIds.length > 0) {
            params.set('ingredients', selectedIds.join(','));
        } else {
            params.delete('ingredients');
        }

        router.replace(`/?${params.toString()}`);
    }, [selectedIds]);

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedIngredients = showAll ? ingredients : ingredients.slice(0, 5);

    const handleToggle = (ingredient: Ingredient) => {
        activeCheckbox(ingredient.title.toString(), setSelectedIds);
    };

    return (
        <>
            <div className='filter__title'>Ингредиенты:</div>
            <div className={`filter__type ${showAll ? 'filter__type--scroll' : ''}`}>
                <ul className='filter__type-items'>
                    {displayedIngredients.map((ingredient: Ingredient) => (
                        <FilterIngredientItem
                            key={ingredient.image}
                            ingredients={ingredient}
                            checked={selectedIds.includes(ingredient.title)}
                            onChange={() => handleToggle(ingredient)}
                        />
                    ))}
                </ul>
            </div>

            {ingredients.length > 5 && (
                <button className='filter__all' onClick={handleShowAll}>
                    {showAll ? '- Скрыть' : '+ Показать все'}
                </button>
            )}
        </>
    );
};
