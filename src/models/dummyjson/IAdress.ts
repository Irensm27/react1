export interface IAddressDummyJson  {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinatesDummyJson ;
    country: string;
}
export interface ICoordinatesDummyJson  {
    lat: number;
    lng: number;
}