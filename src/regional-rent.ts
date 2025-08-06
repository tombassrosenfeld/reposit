import { PropertyData } from "./types";

const getRegionalAverageRent = (region: string, propertyData: PropertyData[]): number => {
    const regionalProperties = propertyData.filter(prop => prop.region === region);

    const totalRent = regionalProperties.reduce(
        (sum: number, property: PropertyData) => sum + property.monthlyRentPence, 0
    );
    
    return Number((totalRent / regionalProperties.length).toFixed(2));
};

export default getRegionalAverageRent;