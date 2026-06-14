
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:'/', element:<Main/>, children:{

        }
    }

])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes} />
)
