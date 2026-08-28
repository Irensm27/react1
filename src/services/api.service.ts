import type {IUser} from "../model/IUser.ts";
import type {IPost} from "../model/IPost.ts";
import type {IComment} from "../model/IComment.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com'



export const userService = {
    getAllUsers:async ():Promise<IUser[]> => {
        const users = await fetch(baseUrl+'/users')
            .then(value => value.json());
        console.log(users);
        return users;

    }
};
export const postService={
    getAllPosts:async ():Promise<IPost[]> => {
        const posts = await fetch(baseUrl+'/posts')
            .then(value => value.json());
        console.log(posts);
        return posts;

    }
};
export const commentService={
    getAllComments:async ():Promise<IComment[]> => {
        const comments = await fetch(baseUrl+'/comments')
            .then(value => value.json());
        console.log(comments);
        return comments;

    }
};