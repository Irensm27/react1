
import {useEffect, useState} from "react";
import type {IUserDummyJson} from "../../../models/dummyjson/DummyJsonUsersModel.ts";
import {getUsersDummyJson} from "../../../services/api.service.tsx";
import DummyJsonUserComponent from "./DummyJsonUserComponent.tsx";


const DummyJsonUsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyJson[]>([]);

    useEffect(() => {
        async function fetchUsersDummyJson(){
            const allUsers = await getUsersDummyJson();
            setUsers(allUsers);
        }
        fetchUsersDummyJson();
    },[])
    return (
        <div>
            {
                users.map((user: IUserDummyJson) => <DummyJsonUserComponent user={user} key={user.id} />)
            }

        </div>
    );
};

export default DummyJsonUsersComponent;