import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./pages/Menu.tsx";

function App() {

  return (
    <>
        <Menu/>
        <Outlet/>
    </>
  )
}

export default App
