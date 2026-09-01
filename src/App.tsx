import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./pages/Menu.tsx";

function App() {

  return (//створюємо головний компонент App
    <>
        <Menu/>{/*відображаємо компонент Menu, який містить меню для переходу між сторінками*/}
        <Outlet/>{/*вказуємо місце, де будуть відображатися дочірні компоненти відповідно до обраного маршруту*/}
    </>
  )
}

export default App
//експортуємо компонент App