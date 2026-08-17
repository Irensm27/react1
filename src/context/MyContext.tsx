import {createContext} from "react";

type Theme = "light" | "dark";

type ThemeContext = {
    theme: Theme;
    toggleTheme: () => void;
}

export const init ={
    theme: "light",
    toggleTheme: () => {console.log('light')}
}

export const MyContext = createContext<ThemeContext>(init);