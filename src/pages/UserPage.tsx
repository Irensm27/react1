import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


const UserPage = () => {
    const {id} = useParams()
    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(userSliceActions.loadUser(Number(id)));
        }
    },[id])
    return (
        <div>
            {!loadState && <div>Loading</div>}
            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};

export default UserPage;