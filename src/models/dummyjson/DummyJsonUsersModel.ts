import type {IAddressDummyJson} from "./IAdress.ts";
import type {ICompanyDummyJson} from "./ICompany.ts";
import type {IBankDummyJson} from "./IBunk.ts";

export interface IUserDummyJson {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHairDummyJson;
    ip: string;
    address: IAddressDummyJson ;
    macAddress: string;
    university: string;
    bank: IBankDummyJson ;
    company: ICompanyDummyJson ;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICryptoDummyJson ;
    role: string;
}
export interface IHairDummyJson {
    color: string;
    type: string;
}
export interface ICryptoDummyJson  {
    coin: string;
    wallet: string;
    network: string;
}