import * as axios from "axios";
import type {IUser} from "../models/IUser.ts";


const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type':'application/json'},
});

export const getAllUsers = async ():Promise<void> => {
    const response = await axiosInstance.get<IUser[]>('/users');
    console.log(response);
}