import { BasketCostBtn } from '../BasketCost/BasketCostBtn';
import { BasketProduct } from '../BasketProduct/BasketProduct';
import { BasketProductEmpty } from '../BasketProductEmpty/BasketProductEmpty';

type PropsType = {
    productsClient: any;
};

export const BasketProducts = ({ productsClient }: PropsType) => {
    return (
        <>
            <div className='basket__content'>
                <div className='basket__items'>
                    {productsClient.map((product: any) => (
                        <BasketProduct key={product.id} product={product.product} />
                    ))}
                </div>
            </div>
        </>
    );
};
