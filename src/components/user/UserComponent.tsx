import type {IUser} from "../../models/IReqResinResponse.ts";
import type {FC} from "react";

type PropsTypeUser ={
    item: IUser
}
const UserComponent:FC<PropsTypeUser> = ({item}) => {
    return (
        <div>
            <div> {item.first_name} {item.last_name}</div>
            <img
                src={item.avatar}
                alt={item.last_name}
                className="w-16 h-16 rounded-full object-cover"
            />
        </div>
    );
};

export default UserComponent;