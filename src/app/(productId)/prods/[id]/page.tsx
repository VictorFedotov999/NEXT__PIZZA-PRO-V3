import { prisma } from '../../../../../prisma/prisma-client';
import { ProductInfo } from '../../../../../components/ProductPage/ProductInfo/ProductInfo';
type PropsType = {
    params: Promise<{
        id: string;
    }>;
};
const ProductPage = async ({ params }: PropsType) => {
    const { id } = await params;
    const numericId = Number(id);

    const sizeOptions = await prisma.sizeOption.findMany();
    const typeOptions = await prisma.typeOption.findMany();

    const products = await prisma.product.findMany({
        where: { id: numericId },
        include: {
            sizeOptions: {},
            typeOptions: {},
            ingredients: {},
        },
    });

    return (
        <section className='product'>
            <div className='container'>
                <div className='product__inner'>
                    {products.map((product) => (
                        <ProductInfo
                            key={product.id}
                            product={product}
                            sizeOptions={sizeOptions}
                            typeOptions={typeOptions}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
