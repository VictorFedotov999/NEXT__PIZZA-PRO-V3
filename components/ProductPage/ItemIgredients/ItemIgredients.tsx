'use client';
import { Ingredient } from '@prisma/client';
import React from 'react';

type PropsType = {
    ingredients: Ingredient[];
    selectedIngredients: Ingredient[]; //
    setSelectedIngredients: (ingredients: Ingredient[]) => void;
};

const ItemIgredients = ({
    ingredients,
    selectedIngredients,
    setSelectedIngredients,
}: PropsType) => {
    const toggleIngredient = (ingredient: Ingredient) => {
        const isSelected = selectedIngredients.some((item) => item.id === ingredient.id);

        if (isSelected) {
            setSelectedIngredients(selectedIngredients.filter((item) => item.id !== ingredient.id));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };

    const isIngredientSelected = (ingredientId: number) => {
        return selectedIngredients.some((item) => item.id === ingredientId);
    };

    if (ingredients.length > 0) {
        return (
            <>
                <div className='product__info-igredients'>
                    <h1 className='product__info-igredients-title'>Ингредиенты</h1>

                    <div className='product__info-items'>
                        {ingredients.map((ingredient, index: number) => (
                            <div
                                key={ingredient.id}
                                onClick={() => toggleIngredient(ingredient)}
                                className={
                                    isIngredientSelected(ingredient.id)
                                        ? 'product__info-item active '
                                        : 'product__info-item'
                                }
                            >
                                <img
                                    className='product__info-igredient-img'
                                    src={ingredient.img}
                                    alt=''
                                />
                                <h3 className='product__info-igredient-title'>
                                    {ingredient.title}
                                </h3>
                                <h3 className='product__info-igredient-price'>
                                    {ingredient.price} ₽
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
};

export default ItemIgredients;
