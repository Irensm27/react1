const baseUrlJson = 'https://jsonplaceholder.typicode.com';
const baseUrlDummy = 'https://dummyjson.com';

export const urlsJs = {
    users: {
        allUsers: baseUrlJson + '/users',
    },
    posts: {
        allPosts: baseUrlJson + '/posts',
    },
    comments:{
        allComments: baseUrlJson + '/comments',
    }
};

export const urlsDummy = {
    users: {
        allUsers: baseUrlDummy + '/users',
    },
    posts:{
        allPosts: baseUrlDummy + '/posts',
    }
};