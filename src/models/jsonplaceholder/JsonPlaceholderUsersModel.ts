import type {IAddressJsonPlaceholder} from "./IAdress.ts";
import type {ICompanyJsonPlaceholder} from "./ICompany.ts";

export interface IUserJsonPlaceholder {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddressJsonPlaceholder;
    phone: string;
    website: string;
    company: ICompanyJsonPlaceholder;
}




