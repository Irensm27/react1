import type {ICousresArray} from "../model/model.ts";

interface ArrayComponentProps {
    item: ICousresArray
}

export const ArrayComponent = ({ item }: ArrayComponentProps) => {
    return (
        <div className="rounded-2xl p-5 text-white bg-linear-to-br from-purple-500 to-pink-500">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>

            <p>Month: {item.monthDuration}</p>
            <p className="mb-3">Hours: {item.hourDuration}</p>

            <ul className="space-y-1">
                {item.modules.map((item, index) => (
                    <li className="bg-white/20 px-2 py-1 rounded" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
