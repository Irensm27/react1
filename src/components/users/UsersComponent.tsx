import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "./UserComponent.tsx";
import {userService} from "../../services/api.service.tsx";


const UsersComponent = () => {
    const [users, setUser] = useState<IUser[]>([])
    useEffect(() => {
        userService.getUsers().then((allUsers)=>{
            setUser(allUsers)
        })
    },[])
    return (
        <div>
            {
                users.map(user => <UserComponent item = {user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;