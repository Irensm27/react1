import type {FC} from "react";
import type {IProduct} from "../../models/ProductModel.ts";

interface IProductProps {
    product: IProduct;
}

export const ProductComponent: FC<IProductProps> = ({ product }) => {
    return (
        <div className="max-w-xl border rounded-xl p-4 shadow-md bg-white m-3 font-sans">

            <div className="flex gap-4 items-center">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-28 h-28 object-cover rounded-lg"
                />

                <div>
                    <h2 className="text-xl font-semibold">{product.title}</h2>

                    <p className="text-gray-500">{product.category}</p>

                    <p className="text-lg font-bold mt-1">${product.price}</p>

                    <span
                        className={`inline-block mt-1 px-2 py-1 text-xs rounded-md ${
                            product.availabilityStatus === "In Stock"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
          {product.availabilityStatus}
        </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                <p><b>Rating:</b> ⭐ {product.rating}</p>
                <p><b>Stock:</b> {product.stock}</p>
                <p><b>Brand:</b> {product.brand}</p>
                <p><b>SKU:</b> {product.sku}</p>
                <p><b>Discount:</b> {product.discountPercentage}%</p>
                <p><b>Warranty:</b> {product.warrantyInformation}</p>
                <p><b>Shipping:</b> {product.shippingInformation}</p>
                <p>
                    <b>Dimensions:</b>{" "}
                    {product.dimensions.width} × {product.dimensions.height} ×{" "}
                    {product.dimensions.depth}
                </p>
            </div>

            <p className="mt-3 text-gray-700">{product.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
                {product.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-4">
                <h3 className="font-semibold mb-2">Reviews</h3>

                {product.reviews.map((review, i) => (
                    <div
                        key={i}
                        className="border rounded-lg p-2 mb-2 bg-gray-50"
                    >
                        <p>⭐ {review.rating}</p>
                        <p>{review.comment}</p>
                        <p className="text-xs text-gray-500">
                            {review.reviewerName}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );}