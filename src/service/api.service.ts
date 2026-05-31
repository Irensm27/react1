
import type {IDummyjsonModel} from "../models/PostResponseDummyjson.ts";

export const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
export const loadPosts = async () => {
    const response:IDummyjsonModel =  await fetch(endpointPosts)
    .then(value => value.json())
    return response.posts;
}