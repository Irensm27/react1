import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const LeftBranchA = () => {
    const {counterValue} = useContext(MyContext);
    return (
        <div>
            LeftBranchA
            <div>
                current counterValue is ={counterValue}
            </div>

        </div>
    );
};

export default LeftBranchA;