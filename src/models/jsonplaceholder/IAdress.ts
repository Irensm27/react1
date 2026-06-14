import type {IGeoJsonPlaceholder} from "./IGeo.ts";

export interface IAddressJsonPlaceholder {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeoJsonPlaceholder;
}