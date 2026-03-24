import axios from 'axios';

export const axionsInstatce = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const API_CATEGORY = '/api/categorys';

export const API_PRODUCTS = '/api/products/';

export const API_PRODUCT_TYPES = '/api/productTypes';

export const API_PRODUCT_SIZES = '/api/productSizes';

export const API_PRODUCT_INGREDIENTS = 'api/productIngredients';

export const API_SORTING = '/api/sorting';

export const API_BASKET_USER = '/api/basketUser';

export const SETTINGS_PAGE = '/settings';
export const USER_ORDERS_PAGE = '/userOrders';
