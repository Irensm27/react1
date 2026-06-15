import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import HomePage from "../pages/homepage/HomePage.tsx";
import JsonPlaceHolderUserPage from "../pages/JsonPlaceHolderUserPage.tsx";
import JsonPlaceHolderPostPage from "../pages/JsonPlaceHolderPostPage.tsx";
import DummyJsonUserPage from "../pages/DummyJsonUserPage.tsx";
import DummyJsonPostPage from "../pages/DummyJsonPostPage.tsx";
import DummyJsonCommentPage from "../pages/DummyJsonCommentPage.tsx";


export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>,
        children: [
            { index: true, element: <HomePage/> },
            {path: 'jsonplaceholder', children: [
                    { path: 'users', element: <JsonPlaceHolderUserPage/> },
                    { path: 'posts', element: <JsonPlaceHolderPostPage /> }
                ]
            },
            {path: 'dummyjson', children: [
                    { path: 'users', element: <DummyJsonUserPage /> },
                    { path: 'posts', element: <DummyJsonPostPage /> },
                    { path: 'comments', element: <DummyJsonCommentPage/>}
                ]
            },

        ]
    }
]);