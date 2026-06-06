import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

interface IUserProps {
    item: IUser;
}

export const UserComponent:FC<IUserProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};

export default UserComponent;