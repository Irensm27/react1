import AComponent from "./components/acomponents/AComponent.tsx";
import BComponent from "./components/bcomponents/BComponent.tsx";
import {MyContext} from "./context/MyContext";
import {useContext} from "react";

function App() {

    const {theme} = useContext(MyContext);

    return (
        <div
            className={
                theme === "light"
                    ? "min-h-screen bg-slate-100 p-10 text-slate-900 transition-colors duration-300"
                    : "min-h-screen bg-slate-900 p-10 text-white transition-colors duration-300"
            }
        >
            <AComponent/>
            <BComponent/>
        </div>
    );
}

export default App;