import {useCallback, useMemo} from "react";
import UserComponent from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";


const UsersComponent = () => {
    console.log('users');

    const users = useFetch();

    const arr =useMemo(()=>{
        return[11,22,33];
    },[]);
    // використовуємо useMemo для масиву, щоб він не створювався заново при кожному ререндері компонента

    const foo = useCallback(() => {
        console.log('test');
    }, [])
    // використовуємо useCallback для запам'ятовування функції, щоб при ререндері не створювалося нове посилання на неї

    return (
        <div>usersComponent
            {
                users.map((value) => <UserComponent foo={foo} arr={arr} item={value}/>)
            }

        </div>
    );
};

export default UsersComponent;