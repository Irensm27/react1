
import { createRoot } from 'react-dom/client'
import './index.css'
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx";
// import APage from "./pages/APage.tsx";
// import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";
//
// export const router = createBrowserRouter([
//     {
//         path:'/', element:<MainLayout/>,
//         children:[
//             {path:'', element:<HomePage />},
//             {path:'a', element:<APage/>},
//             {path:'b', element:<BPage/>},
//
//         ]
//     },
// ])

import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    // <RouterProvider router={router}/>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path={''} element={<HomePage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
