import type {ICousresArray} from "../model/model.ts";

interface ArrayComponentProps {
    item: ICousresArray
}
export const ArrayComponent = ({item}: ArrayComponentProps) => {
    return(
        <div>
            <h2>{item.title}</h2>
            <p>Month - {item.monthDuration}</p>
            <p>Hour - {item.hourDuration}</p>
            <ul>
                {item.modules.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    )

}