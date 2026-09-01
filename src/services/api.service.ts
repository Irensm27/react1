import type {IUser} from "../model/IUser.ts";
import type {IPost} from "../model/IPost.ts";
import type {IComment} from "../model/IComment.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com'// створюємо базову url



export const userService = {
    getAllUsers:async ():Promise<IUser[]> => {
        const users = await fetch(baseUrl+'/users')
            .then(value => value.json());
        return users;

    }
};
//створюємо асинхронну функцію, кажемо, що результатом буде проміс з типізацією IUser масив
//створюємо юзерів, які отримуємо за допомогою фетч запиту на базову урлу з роутом /users, результат переводимо в json
//виводимо юзерів в консоль та повертаємо їх

export const postService={
    getAllPosts:async ():Promise<IPost[]> => {
        const posts = await fetch(baseUrl+'/posts')
            .then(value => value.json());
        return posts;

    }
};
//створюємо асинхронну функцію, кажемо, що результатом буде проміс з типізацією IPost масив
//створюємо posts, які отримуємо за допомогою фетч запиту на базову урлу з роутом /posts, результат переводимо в json
//виводимо пости в консоль та повертаємо їх

export const commentService={
    getAllComments:async ():Promise<IComment[]> => {
        const comments = await fetch(baseUrl+'/comments')
            .then(value => value.json());
        return comments;

    }
};
//створюємо асинхронну функцію, кажемо, що результатом буде проміс з типізацією IComment масив
//створюємо comments, які отримуємо за допомогою фетч запиту на базову урлу з роутом /comments, результат переводимо в json
//виводимо коментарі в консоль та повертаємо їх