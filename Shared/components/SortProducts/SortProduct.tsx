import { getCategorys } from '../../../services/categorys';
import { getSorts } from '../../../services/sorts';
import { CategoryProduct } from './CategoryProduct/CategoryProduct';
import { SortProduct } from './SortProduct/SortProduct';

export const SortProducts = async () => {
    const categorys = await getCategorys();
    const sorts = await getSorts();

    return (
        <>
            <section className='choice__product'>
                <div className='container'>
                    <div className='choice__product-title'>
                        <h1 className='choice__product-text'>Все пиццы</h1>
                    </div>

                    <div className='product__categorie'>
                        <CategoryProduct categorys={categorys} />
                        <SortProduct sorts={sorts} />
                    </div>
                </div>
            </section>
        </>
    );
};
