import {useAppSelector} from "../redux/hooks/useAppSelector.tsx"
import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


const UsersPage = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    },[])


    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>;
                })
            }

        </div>
    );
};

export default UsersPage;