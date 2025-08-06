import getMonthlyRentPerTenant from "../src/monthly-rent";
import {IPropertyData} from "../src/types";
import propertyData from "../data/property-data";

describe("getMonthlyRentPerTenant", () => {
    it('calculate the rent per tenant for a property in pounds', () => {
        expect(getMonthlyRentPerTenant(propertyData[0], "pounds")).toBe(794);
        // using default pounds value
        expect(getMonthlyRentPerTenant(propertyData[5])).toBe(260.20);
        expect(getMonthlyRentPerTenant(propertyData[17])).toBe(768);
    });
    it('calculate the rent per tenant for a property in pence', () => {
        expect(getMonthlyRentPerTenant(propertyData[0], "pence")).toBe(79400);
        expect(getMonthlyRentPerTenant(propertyData[5], 'pence')).toBe(26020);
        expect(getMonthlyRentPerTenant(propertyData[17], "pence")).toBe(76800);
    });


    it('should throw an error if there are no tenants', () => {
        const propertyData: IPropertyData = {
            id: 'invalid_id',
            address: '164 Orchard Avenue',
            postcode: 'AB44 6CD',
            monthlyRentPence: 110300,
            region: 'ENGLAND',
            capacity: 5,
            tenancyEndDate: '2025-11-25'
        };

        expect(() => getMonthlyRentPerTenant(propertyData))
            .toThrow("No tenants found for property invalid_id");
    });
});
