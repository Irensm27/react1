import type {IUserDummyJson} from "../../models/IUser.ts";
import {type FC} from "react";
import {useNavigate} from "react-router-dom";

interface UserComponentProps {
    user: IUserDummyJson;
}
const UserComponent:FC<UserComponentProps> = ({user}) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = (id:number) => {
        navigation('/users/'+id+ '/carts')


    return (

        <div className='my-5 flex items-center gap-3'>
            <p>Name: {user.firstName} Email: {user.email}</p>
            <button className='border-2 bg-amber-200 px-2 py-1' onClick={()=> {
            onButtonClickNavigate(user.id)}
            }>
                click me
            </button>
        </div>
    );
};

export default UserComponent;