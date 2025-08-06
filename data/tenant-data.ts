import path from "path";
import getCsvData from "./get-csv-data";
import type {IPropertyData, ITenant} from "../src/types";

const tenantDataPath = path.join(__dirname, "../data/tenants.csv");
const tenantData = getCsvData<ITenant>(tenantDataPath);

export const getTenantCount = (propertyID: IPropertyData["id"]) => {
    return tenantData.filter((tenant) => tenant.propertyId === propertyID).length;
}

export default tenantData;