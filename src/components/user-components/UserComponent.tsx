import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

interface IUserProps {
    user: IUser;
}
const UserComponent:FC<IUserProps> = ({user}) => {
    return (
        <div>
            {user.id} {user.username}
        </div>
    );
};

export default UserComponent;