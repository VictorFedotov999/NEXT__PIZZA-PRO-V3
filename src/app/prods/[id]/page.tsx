import { ProductInfo } from '../../../../components/ProductPage/ProductInfo/ProductInfo';
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
    console.log('Product со всеми нужными полями', product);
    const productId = product.id;
    const sizes = product.sizeOption;
    const types = product.typeOption;
    const ingredients = product.ingredient;

    return (
        <section className='product'>
            <div className='container'>
                <div className='product__inner'>
                    <ProductInfo
                        product={product}
                        sizes={sizes}
                        sizeOptions={sizeOptions}
                        types={types}
                        typeOptions={typeOptions}
                        ingredients={ingredients}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
