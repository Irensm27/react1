import './App.css'
import {useEffect} from "react";
import {getAllUsers} from "./services/user.service.tsx";

function App() {
  useEffect(() => {
    getAllUsers().then(value => console.log(value));
  }, []);

  return (
    <>

    </>
  )
}

export default App
