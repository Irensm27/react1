import * as axios from "axios";
import type {ICar} from "../models/Cars.ts";


const axiosInstance = axios.create({
    baseURL:'http://bigbird.space/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});

export const getCars = async ():Promise<ICar[]> => {
    const axiosResponce = await axiosInstance.get<ICar[]>("/cars");
    const cars = axiosResponce.data;
    return cars;
}