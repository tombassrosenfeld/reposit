import propertyStatus from "../src/property-status";
import propertyData from "../data/property-data";


describe('propertyStatus', () => {
    test('should return vacant where there are no tenants', () => {
        expect(propertyStatus({
            id: "invalid_id",
            address: "164 Orchard Avenue",
            postcode: "AB44 6CD",
            monthlyRentPence: 110300,
            region: "ENGLAND",
            capacity: 5,
            tenancyEndDate: "2025-11-25"
        })).toEqual("PROPERTY_VACANT");
    });

    test('should return overdue where the end date has passed', () => {
        const property = {
            ...propertyData[5],
            tenancyEndDate:  "2024-11-25",
        };

        expect(propertyStatus(property)).toEqual("PROPERTY_OVERDUE");
    });

    test('should return active where the property is fully occupied', () => {
        const property = propertyData[5];
        expect(propertyStatus(property)).toEqual("PROPERTY_ACTIVE");
    });

    test('should return partially vacant where the property is not fully occupied', () => {
        const property = {
            ...propertyData[5],
            capacity:  6,
        };

        expect(propertyStatus(property)).toEqual("PARTIALLY_VACANT");
    });
})