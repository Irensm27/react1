import type {IUserResponse} from "../models/IUserResponse.ts";

const url = 'https://dummyjson.com';

export const getUsers = async(page:string) :Promise<IUserResponse> => {
    const limit = 30;
    const skip = limit*(+page)-limit;
    const response = await fetch(url + '/users' + '?skip=' + skip)
        .then(res => res.json())
    return response;
}