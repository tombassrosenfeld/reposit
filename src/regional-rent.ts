import fs from "fs";
import {parse} from "csv-parse";

interface PropertyData {
    id: string;
    address: string;
    postcode: string;
    monthlyRentPence: number;
    region: string;
    capacity: string;
    tenancyEndDate: string;
}

const getPropertyData = (): PropertyData[] => {
    const result: PropertyData[] = [];

    fs.createReadStream("../data/properties.csv")
        .pipe(parse())
        .on("data", (data) => {
            result.push(data);
        })
        .on("end", () => {
            console.log(result);
        });
    return result;
}

getPropertyData();

export const getRegionalAverageRent = (region: string) => {

    console.log(getPropertyData());
    return region;
}