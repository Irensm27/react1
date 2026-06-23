import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.tsx";
import CartComponent from "./CartComponent.tsx";


const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
       if (id) {
            cartService.getAllCarts(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                })
        }
    },[id])
    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent cart={cart} key={cart.id}/>)
            }

        </div>
    );
};

export default CartsComponent;