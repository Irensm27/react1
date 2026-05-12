
import type {IProduct} from "../../models/Product.ts";

type MyPropsType = {
    product: IProduct
}

const MyProduct = ({ product }: MyPropsType) => {
    return (
        <div>
            <h2>{product.title}. {product.price}</h2>
            <img src={product.image} alt={product.title} />
        </div>
    )
}

export default MyProduct;