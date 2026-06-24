import type {ICartProduct} from "./IProduct.ts";

export interface ICart {
    id: number;
    products: ICartProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}