import { prisma } from '../../../prisma/prisma-client';
import { FilterProductItem } from '../FilterProductItem/FilterProductItem';

export const FilterProduct = async () => {
    const filter = await prisma.filter.findMany();

    return (
        <>
            <div className='filter__type'>
                <ul className='filter__type-items'>
                    {filter.map((filter) => (
                        <FilterProductItem key={filter.title} filt={filter} />
                    ))}
                </ul>
            </div>
        </>
    );
};
