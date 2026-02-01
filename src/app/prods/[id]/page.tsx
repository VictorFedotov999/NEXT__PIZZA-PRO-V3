import ItemButton from '../../../../components/ProductPage/ItemButton/ItemButton';
import ItemIgredients from '../../../../components/ProductPage/ItemIgredients/ItemIgredients';
import ItemImg from '../../../../components/ProductPage/ItemImg/ItemImg';
import ItemSizes from '../../../../components/ProductPage/ItemSizes/ItemSizes';
import ItemTitle from '../../../../components/ProductPage/ItemTitle/ItemTitle';
import ItemType from '../../../../components/ProductPage/ItemType/ItemType';
import { prisma } from '../../../../prisma/prisma-client';

type PropsType = {
    params: Promise<{
        id: string;
    }>;
};
const ProductPage = async ({ params }: PropsType) => {
    const { id } = await params;
    const numericId = Number(id);

    const product = await prisma.product.findUnique({
        where: { id: numericId },
        include: {
            sizeOption: {},
            typeOption: {},
            ingredient: {},
        },
    });
    const sizes = product.sizeOption;
    const types = product.typeOption;
    const ingredients = product.ingredient;

    console.log(sizes);
    return (
        <section className='product'>
            <div className='container'>
                <div className='product__inner'>
                    <ItemImg product={product} />

                    <div className='product__info'>
                        <ItemTitle product={product} />
                        <p className='product__info-text'>25 см, традиционное тесто 25, 380 г</p>

                        <ItemSizes sizes={sizes} />

                        <ItemType types={types} />

                        <ItemIgredients ingredients={ingredients} />
                        <ItemButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
