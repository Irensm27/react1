import type {IUserJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderUsersModel.ts";
import {urlsDummy, urlsJs} from "../urls/urls.ts";
import type {IPostJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderPostsModel..ts";
import type {IUserDummyJson} from "../models/dummyjson/DummyJsonUsersModel.ts";
import type {IDummyJsonResponseUsers} from "../models/dummyjson/DummyJsonResponseUsersModel.ts";

export const getUsersJsonPlaceHolder = async ():Promise<IUserJsonPlaceholder[]> => {
        return await fetch(urlsJs.users.allUsers)
        .then((response) => response.json())
    }

export const getPostsJsonPlaceHolder = async ():Promise<IPostJsonPlaceholder[]> => {
        return await fetch(urlsJs.posts.allPosts)
        .then((response) => response.json())
    }

export const getUsersDummyJson = async ():Promise<IUserDummyJson[]> => {
    const responseUsersDummyJson:IDummyJsonResponseUsers = await fetch(urlsDummy.users.allUsers)
        .then((response) => response.json())
        return responseUsersDummyJson.users;
}
