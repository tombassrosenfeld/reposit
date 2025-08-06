import getRegionalAverageRent from '../src/regional-rent';
import type { IPropertyData } from "../src/types";
import getCsvData from "../data/get-csv-data";
import path from "path";

// Get the absolute path to the data directory
const propertyDataPath = path.join(__dirname, '../data/properties.csv');
const propertyData = getCsvData<IPropertyData>(propertyDataPath, ['monthlyRentPence', 'capacity']);

describe('getRegionalAverageRent', () => {
    it('should calculate the average rent for the Welsh region', () => {
        const averageRent = getRegionalAverageRent("WALES", propertyData);
        expect(averageRent).toBe(152956);
    });

    it('should calculate the average rent for the English region', () => {
        const averageRent = getRegionalAverageRent("ENGLAND", propertyData);
        expect(averageRent).toBe(166929);
    });

    it('should calculate the average rent for the Scottish region', () => {
        const averageRent = getRegionalAverageRent("SCOTLAND", propertyData);
        expect(averageRent).toBe(186373);
    });

    it('should calculate the average rent for the Northern Irish region', () => {
        const averageRent = getRegionalAverageRent("N.IRELAND", propertyData);
        expect(averageRent).toBe(133991);
    });
    it('should return 0 if there is no property data', () => {
        const averageRent = getRegionalAverageRent("N.IRELAND", []);
        expect(averageRent).toBe(0);
    });

});
