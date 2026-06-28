import type {ICoordinates} from "./IUser.ts";

export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinates;
    country: string;
}