import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ProductModel.ts";
import {loadProducts} from "../../service/api.product.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () =>{
    const [products, setProducts] = useState<IProduct[]>([]);

        useEffect(()=>{
            async function fetchProducts() {
                const allProducts = await loadProducts();
                setProducts(allProducts);
            }
            fetchProducts();
        },[])

        return (
        <div>{
            products.map((product: IProduct) => (<ProductComponent key={product.id} product = {product} />))
        }
        </div>)
        }