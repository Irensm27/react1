import type {IUsersReqResInResponse} from "../models/IReqResinResponse.ts";

export const getAllUsers = async (pg:string):Promise<IUsersReqResInResponse> => {
     return await  fetch('https://reqres.in/api/users?page=' + pg, {
        headers: {
            'x-api-key': 'free_user_3FljLuMadPVSrDlXqj7yvA0vlJL'
        }
    })
        .then(value => value.json())
}