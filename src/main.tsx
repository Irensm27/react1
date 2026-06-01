
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>,
        children:[
            {path:'', element:<HomePage />},
            {path:'a', element:<APage/>},
            {path:'b', element:<BPage/>},

        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
