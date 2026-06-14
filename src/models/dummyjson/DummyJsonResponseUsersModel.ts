import type {IUserDummyJson} from "./DummyJsonUsersModel.ts";

export interface IDummyJsonResponseUsers {
    users: IUserDummyJson[];
    total: number;
    skip: number;
    limit: number;
}