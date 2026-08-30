import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import type {IUser} from "../../model/IUser.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state=> state.userStoreSlice.users));
    useEffect(() => {
        dispatch(userActions.loadUsers())
    },[])
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;