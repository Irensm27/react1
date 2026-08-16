import {useEffect, useState} from "react";

export const useFetch = ()=>{
    // створюємо кастомний хук для отримання користувачів
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });

        return () => {
            console.log('unsubscribe');
        }
    },[]);

    return users;

}