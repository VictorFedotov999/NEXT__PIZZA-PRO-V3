'use client';

import React from 'react';
import { FilterIngredientItem } from '../FilterIngredientItem/FilterIngredientItem';
import { getIngredients } from '../../../services/productInfo';
import { Ingredient } from '@prisma/client';
import { useSearchParams, useRouter } from 'next/navigation';
import { filtersSkeleton } from '../../../lib/filters-Skeleton';
import { activeCheckbox } from '../../../lib/active-Checkbox';

export const FilterIngredients = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [showAll, setShowAll] = React.useState<boolean>(false);
    React.useEffect(() => {
        getIngredients()
            .then((data) => {
                (setIngredients(data), setIsLoading(false));
            })
            .catch((error) => console.log(error));
    }, []);
    const handleShowAll = () => {
        setShowAll(!showAll);
    };
    React.useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedIds.length > 0) {
            params.set('ingredients', selectedIds.join(','));
        } else {
            params.delete('ingredients');
        }

        router.push(`/?${params.toString()}`);
    }, [selectedIds]);
    const displayedIngredients = showAll ? ingredients : ingredients.slice(0, 5);
    const handleToggle = (ingredient: Ingredient) => {
        activeCheckbox(ingredient.title.toString(), setSelectedIds);
    };

    if (isLoading) {
        return filtersSkeleton(5, 'Ингредиенты:', 150, 28);
    }

    return (
        <>
            <div className='filter__title'>Ингредиенты:</div>
            <div className={`filter__type ${showAll ? 'filter__type--scroll' : ''}`}>
                <ul className='filter__type-items'>
                    {displayedIngredients.map((ingredient: Ingredient) => (
                        <FilterIngredientItem
                            key={ingredient.img}
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
