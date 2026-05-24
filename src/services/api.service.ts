import type {IUser} from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const getUsers = async ():Promise<IUser[]> => {
   return  await fetch(baseUrl)
        .then(value => value.json())

}
export const getUser = async ():Promise<IUser> => {
   return  await fetch(baseUrl + '/' )
        .then(value => value.json())


}