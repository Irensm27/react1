import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import {createBrowserRouter} from "react-router-dom";

const routes = [
    {path: '', element: <MainLayout />, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostPage/>}

        ]},
];
export const router = createBrowserRouter(routes);