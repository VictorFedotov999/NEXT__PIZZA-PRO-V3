import { Ingredient } from '@prisma/client';

interface IProps {
    ingredients: Ingredient;
    checked: boolean;
    onChange: () => void;
}

export const FilterIngredientItem = ({ ingredients, checked, onChange }: IProps) => {
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
