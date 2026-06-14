import type {IUserJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderUsersModel.ts";
import {urlsJs} from "../urls/urls.ts";

export const getUsersJsonPlaceHolder = async ():Promise<IUserJsonPlaceholder[]> => {
        return await fetch(urlsJs.users.allUsers)
        .then((response) => response.json())
    }