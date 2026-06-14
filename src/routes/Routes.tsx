
import {createBrowserRouter} from "react-router-dom";
import UsersJSPlaceholderComponent from "../components/users/UsersJSPlaceholderComponent.tsx";
import UsersDummyjsonComponent from "../components/users/UsersDummyjsonComponent.tsx";
import PostsJSPlaceholderComponent from "../components/posts/PostsJSPlaceholderComponent.tsx";
import PostsDummyJsonComponent from "../components/posts/PostsDummyJsonComponent.tsx";
import CommentsJSPlaceholderComponent from "../components/comments/CommentsJSPlaceholderComponent.tsx";
import Layout from "../layout/Layout.tsx";
import HomePage from "../pages/homepage/HomePage.tsx";


export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>,
        children: [
            { index: true, element: <HomePage/> },
            {path: 'jsonplaceholder', children: [
                    { path: 'users', element: <UsersJSPlaceholderComponent/> },
                    { path: 'posts', element: <PostsJSPlaceholderComponent /> },
                    { path: 'comments', element: <CommentsJSPlaceholderComponent/>}
                ]
            },
            {path: 'dummyjson', children: [
                    { path: 'users', element: <UsersDummyjsonComponent /> },
                    { path: 'posts', element: <PostsDummyJsonComponent /> },
                ]
            },

        ]
    }
]);