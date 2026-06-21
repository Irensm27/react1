import type {IUserDummyJson} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import type {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import UserComponent from "./UserComponent.tsx";



const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyJson[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
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