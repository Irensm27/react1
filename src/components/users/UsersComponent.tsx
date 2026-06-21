import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IUserDummyJson} from "../../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyJson[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUserDummyJson[]}>('/users')
            .then(({users}) => setUsers(users));
    }, []);
    return (
        <div>
            {
                users.map((user: IUserDummyJson) => <UserComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersComponent;