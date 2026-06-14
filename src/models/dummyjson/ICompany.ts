import type {IAddressDummyJson} from "./IAdress.ts";

export interface ICompanyDummyJson  {
    department: string;
    name: string;
    title: string;
    address: IAddressDummyJson ;
}
