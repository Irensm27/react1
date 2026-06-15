import type {IUserJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderUsersModel.ts";
import {urlsDummy, urlsJs} from "../urls/urls.ts";
import type {IPostJsonPlaceholder} from "../models/jsonplaceholder/JsonPlaceholderPostsModel..ts";
import type {IUserDummyJson} from "../models/dummyjson/DummyJsonUsersModel.ts";
import type {IDummyJsonResponseUsers} from "../models/dummyjson/DummyJsonResponseUsersModel.ts";
import type {IPostDummyJson} from "../models/dummyjson/DummyJsonPostsModel.ts";
import type {IDummyJsonResponsePosts} from "../models/dummyjson/DummyJsonResponsePostsModel.ts";
import type {ICommentDummyJson} from "../models/dummyjson/DummyJsonCommentsModel.ts";
import type {IDummyJsonResponseComments} from "../models/dummyjson/DummyJsonResponseCommentModel.ts";

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

export const getPostsDummyJson = async ():Promise<IPostDummyJson[]>=>{
    const responsePostsDummyJson:IDummyJsonResponsePosts = await  fetch(urlsDummy.posts.allPosts)
        .then((response) => response.json())
         return responsePostsDummyJson.posts;
}

export const getCommentsDummyJson = async ():Promise<ICommentDummyJson[]>=>{
    const responseCommentsDummyJson:IDummyJsonResponseComments = await fetch(urlsDummy.comments.allComments)
        .then((response) => response.json())
    return responseCommentsDummyJson.comments;
}

