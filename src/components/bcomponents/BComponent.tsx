import B1Component from "./B1Component.tsx";

const BComponent = () => {

    return (
        <div className="border-l-2 border-indigo-300 pl-4">

            <div className="mb-3 inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                BComponent
            </div>

            <B1Component/>

        </div>
    );
};

export default BComponent;