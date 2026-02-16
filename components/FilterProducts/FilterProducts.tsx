import { FilterIngredients } from './FilterIngredients/FilterIngredients';
import { FilterPrice } from './FilterPrice/FilterPrice';

import { FilterSize } from './FilterProduct/FilterProduct';
import { FilterType } from './FilterType/FilterType';

export const FilterProducts = () => {
    return (
        <>
            <div className='filter'>
                <h1 className='filter__title'>Фильтрация</h1>
                <FilterType />
                <FilterSize />
                {/* <FilterPrice /> */}
                <FilterIngredients />
            </div>
        </>
    );
};
