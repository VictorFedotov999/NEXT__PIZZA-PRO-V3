import Image from 'next/image';
import Link from 'next/link';
const InputPopop = ({ products, setFocused }) => {
    return (
        <>
            <div className='header__popup active'>
                <div className='header__popup__items'>
                    {products.map((product) => (
                        <Link href={`/prods/${product.id}`}>
                            <div className='header__popup__item' onClick={() => setFocused(false)}>
                                <img
                                    className='header__popup__item-img'
                                    src={product.imageUrl}
                                    alt=''
                                    width={30}
                                    height={30}
                                />
                                <h3 className='header__popup__item-title'>{product.title}</h3>
                                <h3 className='header__popup__item-price'>{product.price}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default InputPopop;
