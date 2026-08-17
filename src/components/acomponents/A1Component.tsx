import A2Component from "./A2Component.tsx";

const A1Component = () => {

    return (
        <div className="ml-5 border-l-2 border-indigo-300 pl-4">

            <div className="mb-3 inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                A1Component
            </div>

            <A2Component/>

        </div>
    );
};

export default A1Component;