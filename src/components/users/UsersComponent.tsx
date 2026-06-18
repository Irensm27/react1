import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IUserDummyJson} from "../../models/IUser.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyJson[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUserDummyJson[]}>('/users')
            .then(({users}) => setUsers(users));
    }, []);
    return (
        <div>
            {
                users.map((user: IUserDummyJson) => <div key={user.id}>{user.username}</div>)
            }

        </div>
    );
};

export default UsersComponent;