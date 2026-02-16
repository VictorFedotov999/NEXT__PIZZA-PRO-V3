'use client';

import React from 'react';

import { Ingredient } from '@prisma/client';

type PropsType = {
    ingredients: Ingredient[];
};

const ItemIgredients = ({ ingredients }: PropsType) => {
    const [igredientActive, setIgredientActive] = React.useState(0);

    const onClickIgredient = (index: number) => {
        setIgredientActive(index);
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
                                onClick={() => onClickIgredient(index)}
                                className={
                                    igredientActive === index
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
