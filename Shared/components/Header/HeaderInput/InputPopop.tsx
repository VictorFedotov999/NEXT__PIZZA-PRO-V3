import { ProductIdType } from '../../../prisma/prismaType';
import { PopupItem } from './PopupItem';

interface IProps {
    products: ProductIdType[];
    setFocused: (type: boolean) => void;
}

const InputPopop = ({ products, setFocused }: IProps) => {
    if (products.length === 0) {
        return (
            <div className='header__popup active'>
                <div className='header__popup__items'>Данного товара нет...</div>
            </div>
        );
    }
    return (
        <>
            <div className='header__popup active'>
                <div className='header__popup__items'>
                    {products.map((product) => (
                        <PopupItem key={product.id} product={product} setFocused={setFocused} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default InputPopop;
