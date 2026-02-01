import { Products } from '../../components/Products/Products';
import { FilterProducts } from '../../components/FilterProducts/FilterProducts';
import { SortProducts } from '../../components/SortProducts/SortProduct';

export default function Home() {
    return (
        <>
            <main className='main'>
                <SortProducts />

                <section className='products'>
                    <div className='container'>
                        <div className='products__inner'>
                            <FilterProducts />
                            <Products />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
