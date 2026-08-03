import type {ICar} from "../models/Cars.ts";
import type {FC} from "react";

export interface ICarProps {
    car: ICar
}
const CarComponent: FC<ICarProps> = ({ car }) => {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h3>{car.brand}</h3>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarComponent;