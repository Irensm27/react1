import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import { RouterProvider} from "react-router-dom";
import {routes} from "./routes/router.tsx";
import {store} from "./redux/store.ts";



createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)
//викликаємо провайдер стор, передаємо туди наш створений стор, в якому будуть зберігатися дані
//викликаємо роутер провайдер, передаємо туди наш створений роутер, який буде відповідати за роути
