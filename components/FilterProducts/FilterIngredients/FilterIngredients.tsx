'use client';

import React from 'react';
import { FilterIngredientItem } from '../FilterIngredientItem/FilterIngredientItem';
import { getIngredients } from '../../../services/ingredients';
import { Ingredient } from '@prisma/client';
import { useSearchParams, useRouter } from 'next/navigation';

export const FilterIngredients = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    React.useEffect(() => {
        getIngredients().then((data) => setIngredients(data));
    }, []);

    React.useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedIds.length > 0) {
            params.set('ingredients', selectedIds.join(','));
        } else {
            params.delete('ingredients');
        }

        router.push(`/?${params.toString()}`);
    }, [selectedIds]);

    const handleToggle = (ingredient: Ingredient) => {
        setSelectedIds((prev) =>
            prev.includes(ingredient.title)
                ? prev.filter((title) => title !== ingredient.title)
                : [...prev, ingredient.title],
        );
    };

    return (
        <>
            <div className='filter__ingredients'>
                <div className='filter__ingredients-title'>Ингредиенты:</div>
                <div className='filter__ingredients-list'>
                    {ingredients.map((ingredient: Ingredient) => (
                        <FilterIngredientItem
                            key={ingredient.img}
                            ingredients={ingredient}
                            checked={selectedIds.includes(ingredient.title)}
                            onChange={() => handleToggle(ingredient)}
                        />
                    ))}
                </div>
                <button className='filter__all'>+ Показать все</button>
            </div>
        </>
    );
};
