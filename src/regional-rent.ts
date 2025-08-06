import {PropertyData, TRegion} from "./types";

const getRegionalAverageRent = (region: TRegion, propertyData: PropertyData[]): number => {
    const regionalProperties = propertyData.filter(prop => prop.region === region);

    // exit early if we have no relevant data
    if (regionalProperties.length === 0) {
        return 0;
    }

    const totalRent = regionalProperties.reduce(
        (sum: number, property: PropertyData) => sum + property.monthlyRentPence, 0
    );

    // I made the assumption that fractions of pennies are probably not useful data here
    return Math.round((totalRent / regionalProperties.length));
};

export default getRegionalAverageRent;