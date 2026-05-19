import { ArrayComponent } from "../arrayComponent/ArrayComponent";
import { coursesArray } from "../data/Array";

export const ArrayComponents = () => {
    return (
        <div>
            {coursesArray.map((value, index) => {
                return (
                    <ArrayComponent key={index} item={value}>

                    </ArrayComponent>
                );
            })}
        </div>
    );
};