import { INewProduct } from '@/store/BasketClientStore/BasketClientType';

interface ISameProduct {
    products: INewProduct[];
    newProduct: INewProduct;
}

export const sameProductFunc = (products: INewProduct, newProduct: INewProduct) => {
    const sameProduct = products.find(
        (product: INewProduct) =>
            product.id === newProduct.id &&
            product.size === newProduct.size &&
            product.type === newProduct.type,
    );
    return sameProduct;
};
