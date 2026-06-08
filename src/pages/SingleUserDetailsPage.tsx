import {useLocation} from "react-router-dom";
import type {IUser} from "../models/IUser.ts";


const SingleUserDetailsPage = () => {

    const {state} = useLocation();
    const user = state as IUser
    return (
        <div>
            {user.username}
        </div>
    );
};

export default SingleUserDetailsPage;