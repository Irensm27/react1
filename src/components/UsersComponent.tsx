import {useFetch} from "../hooks/useFetch.tsx";

const UsersComponent = () => {

    const users = useFetch<{id:number, name:string}[]>('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            {
                users &&
                users.map(user => (
                    <div key={user.id}>
                        {user.id}:{user.name}
                    </div>
                ))
            }
        </>
    );
};

export default UsersComponent;