import type {IProduct} from "./IProduct.ts";

export interface IProductResponseModel{
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}