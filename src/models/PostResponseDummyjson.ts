import type {IPostModel} from "./PostModel.ts";

export interface IDummyjsonModel {
    posts:IPostModel[],
    skip:number,
    total:number,
    limit:number
}