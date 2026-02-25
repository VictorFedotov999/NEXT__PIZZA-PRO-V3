import * as products from './searchProducts';
import * as category from './filteringProduct';
import * as basketProduct from './basketProductClient';

export const Api = {
    SearchProduct: products.search,
    CategoryProduct: category.category,
    ProductClient: basketProduct.getBasketProductClient,
};
