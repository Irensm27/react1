import {useState, type ReactNode} from "react";
import {MyContext, type Theme} from "./MyContext";

type MyContextProviderProps = {
    children: ReactNode;
};

export const MyContextProvider = ({children}: MyContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(prevTheme =>
            prevTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <MyContext.Provider value={{theme, toggleTheme}}>
            {children}
        </MyContext.Provider>
    );
};