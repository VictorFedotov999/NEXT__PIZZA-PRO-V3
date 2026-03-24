import { Products } from '../../../Shared/components/Products/Products';
import { FilterProducts } from '../../../Shared/components/FilterProducts/FilterProducts';
import { SortProducts } from '../../../Shared/components/SortProducts/SortProduct';

export default function Home() {
    return (
        <>
            <SortProducts />

            <section className='products'>
                <div className='container'>
                    <div className='products__inner'>
                        <FilterProducts />
                        <Products />
                    </div>
                </div>
            </section>
        </>
    );
}
