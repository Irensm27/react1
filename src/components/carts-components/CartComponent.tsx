import type {ICart} from "../../models/ICart.ts";
import type {FC} from "react";

interface ICartProps {
    cart: ICart
}
const CartComponent:FC<ICartProps> = ({cart}) => {
    return (
        <div>
            {cart.id}
            <hr/>
            {cart.total}
        </div>
    );
};

export default CartComponent;