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

axiosInstance.interceptors.request.use((request)=> {
    console.log(request);
    return request;
})

axiosInstance.interceptors.response.use((response)=> {
    console.log(response);
    return response;
})