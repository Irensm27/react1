import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const B2Component = () => {

    const {theme, toggleTheme} = useContext(MyContext);

    return (
        <div className="ml-5 border-l-2 border-indigo-300 pl-4">

            <div className="mb-3 inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                B2Component
            </div>

            <div
                className={
                    theme === "light"
                        ? "rounded-xl bg-slate-50 p-4"
                        : "rounded-xl bg-slate-900 p-4"
                }
            >

                <div className="mb-4 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-xl">
                        {theme === "light" ? "☀" : "☾"}
                    </div>

                    <div>
                        <p className="text-xs opacity-50">
                            Current theme
                        </p>

                        <p className="font-semibold">
                            {theme === "light"
                                ? "Light mode"
                                : "Dark mode"
                            }
                        </p>
                    </div>

                </div>

                <button
                    onClick={toggleTheme}
                    className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
                >
                    {theme === "light"
                        ? "Switch to dark"
                        : "Switch to light"
                    }
                </button>

            </div>

        </div>
    );
};

export default B2Component;