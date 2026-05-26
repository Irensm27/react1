import type {IPostModel} from "../models/PostModel.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

export const loadPosts = async ():Promise <IPostModel[]> =>{
    return await fetch(endpointPosts)
        .then((response) => response.json())
}
