import B2Component from "./B2Component.tsx";

const B1Component = () => {

    return (
        <div className="ml-5 border-l-2 border-indigo-300 pl-4">

            <div className="mb-3 inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                B1Component
            </div>

            <B2Component/>

        </div>
    );
};

export default B1Component;