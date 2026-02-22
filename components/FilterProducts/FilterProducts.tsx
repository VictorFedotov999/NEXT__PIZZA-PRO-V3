import { FilterIngredients } from './FilterIngredients/FilterIngredients';
import { FilterPrice } from './FilterPrice/FilterPrice';

import { FilterSize } from './FilterSize/FilterSize';
import { FilterType } from './FilterType/FilterType';

export const FilterProducts = () => {
    return (
        <>
            <div className='filter'>
                <h1 className='filter__title-type'>Фильтрация</h1>
                <FilterType />
                <FilterSize />
                <FilterIngredients />
            </div>
        </>
    );
};
