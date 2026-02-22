'use client';

import React from 'react';
import ItemButton from '../ItemButton/ItemButton';
import ItemIgredients from '../ItemIgredients/ItemIgredients';
import ItemImg from '../ItemImg/ItemImg';
import ItemSizes from '../ItemSizes/ItemSizes';
import ItemTitle from '../ItemTitle/ItemTitle';
import ItemType from '../ItemType/ItemType';

import { SizeOption, TypeOption, Ingredient } from '@prisma/client';
import { addProduct } from '@/store/BasketClientStore/BasketClientSelectors';
import { addProductBasket } from '../../../utils/addProductBasket';
import { IBasketProduct } from '@/store/BasketClientStore/BasketClientType';
import { FullProductType } from '../../../sharedType/type';

interface IProductInfo {
    product: FullProductType;
    sizes: SizeOption[];
    sizeOptions: SizeOption[];
    types: TypeOption[];
    typeOptions: TypeOption[];
    ingredients: Ingredient[];
}

export const ProductInfo = ({
    product,
    sizes,
    sizeOptions,
    types,
    typeOptions,
    ingredients,
}: IProductInfo) => {
    const [sizeActive, setSizeAcitve] = React.useState(0);
    const [typeActive, setTypeActive] = React.useState(0);
    const [igredientActive, setIgredientActive] = React.useState(0);

    const sizeCurrent = sizes.map((size) => size.size);
    const typeCurrent = types.map((type) => type.type);

    const onClickAddProduct = () => {
        addProductBasket({
            product,
            func: addProduct,
            sizeCurrent,
            sizeActive,
            typeCurrent,
            typeActive,
        });
    };
    return (
        <>
            <ItemImg product={product} />

            <div className='product__info'>
                <ItemTitle product={product} />
                <p className='product__info-text'>25 см, традиционное тесто 25, 380 г</p>

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
                    igredientActive={igredientActive}
                    setIgredientActive={setIgredientActive}
                />

                <div onClick={onClickAddProduct}>
                    <ItemButton price={product.price} />
                </div>
            </div>
        </>
    );
};
