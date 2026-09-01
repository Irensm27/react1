import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import type {IUser} from "../../model/IUser.ts";
import UserComponent from "./UserComponent.tsx";


const UsersComponent = () => {
    //компонент запускає завантаження користувачів та отримує їх з Redux Store для відображення списку
    const dispatch = useAppDispatch();//створюємо діспатч для запуску actions та thunks
    const users = useAppSelector((state=> state.userStoreSlice.users));
    //отримуємо юзерів через useAppSelector звертаючись до них через userStoreSlice
    useEffect(() => {
        dispatch(userActions.loadUsers())
    },[])
    // Запускаємо thunk для завантаження коментарів
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};
//перебираємо масив юзерів, для кожного з них створюємо UserComponent, через який будемо їх відображати

export default UsersComponent;