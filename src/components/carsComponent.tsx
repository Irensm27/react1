import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import type {ICar} from "../models/Cars.ts";
import CarComponent from "./carComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then(()=>{
            setCars(cars);
        })
    }, []);
    return (
        <div>
            {cars.map((car) => (<CarComponent key={car.id} car={car} />))}
        </div>
    );
};

export default CarsComponent;