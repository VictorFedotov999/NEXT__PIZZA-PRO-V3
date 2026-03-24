import { prisma } from '../../../../../prisma/prisma-client';
import { BackBtn } from '../../../../../Shared/components/Order/BackBtn/BackBtn';
import { ProductInfo } from '../../../../../Shared/components/ProductPage/ProductInfo/ProductInfo';

interface IProps {
    params: Promise<{
        id: string;
    }>;
}
const ProductPage = async ({ params }: IProps) => {
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
                    <BackBtn />
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
