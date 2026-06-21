import type {IUserDummyJson} from "../../models/IUser.ts";
import type {FC} from "react";

interface UserComponentProps {
    user: IUserDummyJson
}

const UserComponent:FC<UserComponentProps> = ({user}) => {
    return (
        <div>
            {user.firstName}
        </div>
    );
};

export default UserComponent;