import type {IProduct} from "./ProductModel.ts";

export interface ProductResponsDummyjson {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}