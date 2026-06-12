import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./components/menu/Menu.tsx";

function App() {

  return (
    <>
        <Menu/>
        This is App component
        <Outlet/>
    </>
  )
}

export default App
