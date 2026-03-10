'use client';

import React from 'react';
import ItemButton from '../ItemButton/ItemButton';
import ItemIgredients from '../ItemIgredients/ItemIgredients';
import ItemImg from '../ItemImg/ItemImg';
import ItemSizes from '../ItemSizes/ItemSizes';
import ItemTitle from '../ItemTitle/ItemTitle';
import ItemType from '../ItemType/ItemType';

import { Ingredient, SizeOption, TypeOption } from '@prisma/client';
import { ProductIdType } from '../../../prisma/prismaType';
import { useProductBasketClientStore } from '@/store/BasketClientStore/BasketClientStore';

interface IProductInfo {
    product: ProductIdType;
    sizeOptions: SizeOption[];
    typeOptions: TypeOption[];
}

export const ProductInfo = ({ product, sizeOptions, typeOptions }: IProductInfo) => {
    const { addCartItem } = useProductBasketClientStore();

    const [sizeActive, setSizeAcitve] = React.useState(0);
    const [typeActive, setTypeActive] = React.useState(0);
    const [selectedIngredients, setSelectedIngredients] = React.useState<Ingredient[]>([]);

    const sizes = product.sizeOptions;
    const types = product.typeOptions;
    const ingredients = product.ingredients;

    const selectedSize = sizeOptions.map((size) => size.id);
    const selectedType = typeOptions.map((type) => type.id);
    const selectedIngredientsId = selectedIngredients.map((ingredients) => ingredients.id);

    console.log('ingredients', ingredients);
    console.log('selectedIngredientsId', selectedIngredientsId);

    const onAddProductToBasket = () => {
        const newProduct = {
            basketId: 1,
            productId: product.id,
            sizeOptionId: selectedSize[sizeActive],
            typeOptionId: selectedType[typeActive],
            ingredients: selectedIngredientsId,
        };
        addCartItem(newProduct);
    };

    return (
        <>
            <ItemImg product={product} />

            <div className='product__info'>
                <ItemTitle product={product} />

                {product.typeOptions.length > 1 ||
                product.sizeOptions.length > 1 ||
                product.ingredients.length > 1 ? (
                    <>
                        <p className='product__info-text'>
                            {sizeOptions.map((size) => size.size)[sizeActive]}см,
                            {typeOptions.map((type) => type.type)[typeActive]} тесто.
                        </p>

                        <ItemSizes
                            sizes={sizes}
                            sizeOptions={sizeOptions}
                            sizeActive={sizeActive}
                            setSizeAcitve={setSizeAcitve}
                        />
                        <ItemType
                            types={types}
                            typeOptions={typeOptions}
                            typeActive={typeActive}
                            setTypeActive={setTypeActive}
                        />
                        <ItemIgredients
                            ingredients={ingredients}
                            selectedIngredients={selectedIngredients}
                            setSelectedIngredients={setSelectedIngredients}
                        />
                    </>
                ) : null}

                <div onClick={onAddProductToBasket}>
                    <ItemButton price={product.price} />
                </div>
            </div>
        </>
    );
};
