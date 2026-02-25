import { IBasketProduct } from '@/store/BasketClientStore/BasketClientType';

interface IAddProductBasket {
    product: IBasketProduct;
    func: (basketProduct: IBasketProduct) => void;
    sizeCurrent: Array<number>;
    typeCurrent: Array<string>;
    sizeActive: number;
    typeActive: number;
}

export const addProductBasket = ({
    product,
    func,
    sizeCurrent,
    sizeActive,
    typeCurrent,
    typeActive,
}: IAddProductBasket): void => {
    const basketProduct: IBasketProduct = {
        id: product.id,
        title: product.title,
        imageUrl: product.imageUrl,
        size: sizeCurrent[sizeActive],
        type: typeCurrent[typeActive],
        price: product.price,
        count: 1,
    };
    func(basketProduct);
};

interface IremoveProductBasket {
    product: IBasketProduct;
    func: (product: IBasketProduct) => void;
}

export const removeProductBasket = ({ product, func }: IremoveProductBasket): void => {
    func(product);
};
