import { useEffect, useState} from "react";
import type {IUserJsonPlaceholder} from "../../../models/jsonplaceholder/JsonPlaceholderUsersModel.ts";
import {getUsersJsonPlaceHolder} from "../../../services/api.service.tsx";
import JsonPlaceholderUserComponent from "./JsonPlaceholderUserComponent.tsx";

const JsonPlaceholderUsersComponent = () => {
    const [users, setUser] = useState<IUserJsonPlaceholder[]>([]);

    useEffect(() => {
        async function fetchUsers(){
            const allUsers = await getUsersJsonPlaceHolder();
            setUser(allUsers);
        }
        fetchUsers();
    },[])

    return (
        <div>
            {
                users.map((user:IUserJsonPlaceholder) => <JsonPlaceholderUserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default JsonPlaceholderUsersComponent;