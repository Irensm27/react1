import type {IUser} from "../models/IUser.ts";

export const getUsers = async ():Promise<IUser[]> => {
    const users = await fetch('http://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return users;
}
export const getUser = async ():Promise<IUser> => {
    const user = await fetch('http://jsonplaceholder.typicode.com/users/id')
        .then(value => value.json())
    return user;

}