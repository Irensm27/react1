import type {ICommentDummyJson} from "./DummyJsonCommentsModel.ts";

export interface IDummyJsonResponseComments {
    comments: ICommentDummyJson[];
    total: number;
    skip: number;
    limit: number;
}