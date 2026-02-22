export interface IBasketProduct {
    id: number;
    title: string;
    imageUrl: string;
    size: number;
    type: string;
    price: number;
    count: number;
}

export interface IActions {
    addProduct: (baksetProduct: IBasketProduct) => void;
    removeProduct: (baksetProduct: IBasketProduct) => void;
    plusProduct: (baksetProduct: IBasketProduct) => void;
}

export interface IInitialState {
    products: IBasketProduct[];
    totalCost: number;
    productCount: number;
}

export interface IUseProductBasketClientState extends IInitialState, IActions {}
