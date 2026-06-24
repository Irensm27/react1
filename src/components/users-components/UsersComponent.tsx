import type {IUserDummyJson} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import type {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import UserComponent from "./UserComponent.tsx";
import {userService} from "../../services/api.service.tsx";



const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyJson[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}:IUserResponseModel) => setUsers(users));
    },[])

    return (
        <div>
            {
                users.map((user: IUserDummyJson) => <UserComponent user = {user} key={user.id}/>)
            }

        </div>
    );
};

export default UsersComponent;