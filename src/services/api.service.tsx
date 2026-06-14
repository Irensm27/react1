import type {IUserJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderUsersModel.ts";
import {urlsJs} from "../urls/urls.ts";
import type {IPostJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderPostsModel..ts";

export const getUsersJsonPlaceHolder = async ():Promise<IUserJsonPlaceholder[]> => {
        return await fetch(urlsJs.users.allUsers)
        .then((response) => response.json())
    }
    export const getPostsJsonPlaceHolder = async ():Promise<IPostJsonPlaceholder[]> => {
        return await fetch(urlsJs.posts.allPosts)
        .then((response) => response.json())
    }