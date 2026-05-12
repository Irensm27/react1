import type {FC} from "react";

type ComponentPropType = { tittle: string, children?: React.ReactNode };

const MyComponent: FC<ComponentPropType> = ({tittle, children}) => {
    return <div className="text-xl text-blue-500 font-bold text-center">
        <h2>{tittle}</h2>
        <p>{children}</p>
    </div>
}

export default MyComponent;

