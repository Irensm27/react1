import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {IUser} from "../../models/IReqResinResponse.ts";
import {getAllUsers} from "../../service/api.service.tsx";
import UserComponent from "./UserComponent.tsx";


const Some = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        getAllUsers(pg || '1').then(value => setUsers(value.data));

    }, [query]);
    return (
        <div>
            {
                users.map(value => <UserComponent item={value} key={value.id}/> )
            }
        </div>
    );
};

export default Some;