import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import HomePage from "../pages/homepage/HomePage.tsx";
import JsonPlaceHolderUserPage from "../pages/jsonplaceholderpage/JsonPlaceHolderUserPage.tsx";
import JsonPlaceHolderPostPage from "../pages/jsonplaceholderpage/JsonPlaceHolderPostPage.tsx";
import DummyJsonUserPage from "../pages/dummyjsonpage/DummyJsonUserPage.tsx";
import DummyJsonPostPage from "../pages/dummyjsonpage/DummyJsonPostPage.tsx";
import DummyJsonCommentPage from "../pages/dummyjsonpage/DummyJsonCommentPage.tsx";


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