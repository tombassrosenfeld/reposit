export type TRegion = 'N.IRELAND' | 'WALES' | 'ENGLAND' | 'SCOTLAND'

export interface PropertyData {
    id: string;
    address: string;
    postcode: string;
    monthlyRentPence: number;
    region: TRegion;
    capacity: number;
    tenancyEndDate: string;
}
