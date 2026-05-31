import type {IProduct} from "../models/ProductModel.ts";
import type {ProductResponsDummyjson} from "../models/ProductResponsDummyjson.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

export const loadProducts:ProductResponsDummyjson = async ():Promise<IProduct[]> => {
    const response: = await fetch(endpointProducts);

}