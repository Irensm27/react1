import type {ICommentModel} from "../models/CommentModel.ts";

const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

export const loadComments = async ():Promise<ICommentModel[]> => {
    return await fetch(endpointComments)
    .then(res => res.json())
}