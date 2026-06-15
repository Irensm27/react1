import type {IPostDummyJson} from "./DummyJsonPostsModel.ts";

export interface IDummyJsonResponsePosts {
    posts: IPostDummyJson[];
    total: number;
    skip: number;
    limit: number;
}