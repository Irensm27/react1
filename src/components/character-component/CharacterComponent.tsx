import type {ICharacter} from "../../models/ICharacter.ts";
import "./CharacterComponent.css";

interface CharacterComponentProps{
    item: ICharacter,
    children: React.ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='border caret-blue-200 mb-2 mt-3'>
            <h3 className="text-xl font-bold text-fuchsia-700 ">{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name} />
            <p>{children}</p>
        </div>
    )
}