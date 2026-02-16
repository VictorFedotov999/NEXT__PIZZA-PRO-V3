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

    const sizeOptions = await prisma.sizeOption.findMany({
        distinct: ['size'],
        orderBy: {
            size: 'asc',
        },
    });

    const typeOptions = await prisma.typeOption.findMany({
        distinct: ['type'],
        orderBy: {
            type: 'asc',
        },
    });

    const product = await prisma.product.findUniqueOrThrow({
        where: { id: numericId },
        include: {
            sizeOption: true,
            typeOption: true,
            ingredient: true,
        },
    });

    const productId = product.id;
    const sizes = product.sizeOption;
    const types = product.typeOption;
    const ingredients = product.ingredient;
    console.log(sizes, sizeOptions);

    return (
        <section className='product'>
            <div className='container'>
                <div className='product__inner'>
                    <ItemImg product={product} />

                    <div className='product__info'>
                        <ItemTitle product={product} />
                        <p className='product__info-text'>25 см, традиционное тесто 25, 380 г</p>

                        <ItemSizes sizes={sizes} sizeOptions={sizeOptions} />

                        <ItemType types={types} typeOptions={typeOptions} />

                        <ItemIgredients ingredients={ingredients} />

                        <ItemButton productId={productId} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
