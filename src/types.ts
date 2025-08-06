export type TRegion = 'N.IRELAND' | 'WALES' | 'ENGLAND' | 'SCOTLAND';

export interface IPropertyData {
    id: string;
    address: string;
    postcode: string;
    monthlyRentPence: number;
    region: TRegion;
    capacity: number;
    tenancyEndDate: string;
}

export interface ITenant {
    id: string;
    propertyId: IPropertyData["id"];
    name: string;
}
