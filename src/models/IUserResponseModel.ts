import type {IUserDummyJson} from "./IUser.ts";

export interface IUserResponseModel {
    users: IUserDummyJson[];
    total: number;
    skip: number;
    limit: number;
}