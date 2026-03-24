import { getIngredients, getSizes, getTypes } from '../../../services/productInfo';
import { FilterIngredients } from './FilterIngredients/FilterIngredients';

import { FilterSize } from './FilterSize/FilterSize';
import { FilterType } from './FilterType/FilterType';

export const FilterProducts = async () => {
    const types = await getTypes();
    const sizes = await getSizes();
    const ingredients = await getIngredients();
    return (
        <>
            <div className='filter'>
                <h1 className='filter__title-type'>Фильтрация</h1>
                <FilterType types={types} />
                <FilterSize sizes={sizes} />

                <FilterIngredients ingredients={ingredients} />
            </div>
        </>
    );
};
