// Get the absolute path to the data directory
import path from "path";
import getCsvData from "./get-csv-data";
import type {IPropertyData} from "../src/types";

const propertyDataPath = path.join(__dirname, '../data/properties.csv');
const propertyData = getCsvData<IPropertyData>(propertyDataPath, ['monthlyRentPence', 'capacity']);

export default propertyData;