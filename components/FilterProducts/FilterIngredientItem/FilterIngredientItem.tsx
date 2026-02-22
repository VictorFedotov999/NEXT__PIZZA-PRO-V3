import React from 'react';

import { Ingredient } from '@prisma/client';

type PropsType = {
    ingredients: Ingredient;
    checked: boolean;
    onChange: () => void;
};

export const FilterIngredientItem: React.FC<PropsType> = ({ ingredients, checked, onChange }) => {
    return (
        <>
            <li className='filter__type-item'>
                <input
                    checked={checked}
                    onChange={onChange}
                    className='filter__type-text'
                    type='checkbox'
                    id={`ingredient-${ingredients.id}`}
                />
                <label htmlFor={`ingredient-${ingredients.id}`}>{ingredients.title}</label>
            </li>
        </>
    );
};
