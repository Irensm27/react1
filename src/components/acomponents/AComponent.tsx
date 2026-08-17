import A1Component from "./A1Component.tsx";

const AComponent = () => {

    return (
        <div className="border-l-2 border-indigo-300 pl-4">

            <div className="mb-3 inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                AComponent
            </div>

            <A1Component/>

        </div>
    );
};

export default AComponent;