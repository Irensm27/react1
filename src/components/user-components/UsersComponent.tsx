import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.tsx";
import type {IUserResponse} from "../../models/IUserResponse.ts";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {
    const [searchParams] = useSearchParams({page:'1'});
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage)
            .then(({users}:IUserResponse) => setUsers(users));
    },[searchParams])
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)
            }

        </div>
    );
};

export default UsersComponent;