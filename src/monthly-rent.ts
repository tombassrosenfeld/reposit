import type {IPropertyData, ITenant} from "./types";
import getCsvData from "../data/get-csv-data";
import path from "path";

const pencePerPound = 100;

const getMonthlyRentPerTenant = (property: IPropertyData, format: "pounds" | "pence" = "pounds") => {
    const tenantDataPath = path.join(__dirname, "../data/tenants.csv");
    const tenantData = getCsvData<ITenant>(tenantDataPath);

    const tenantCount = tenantData.filter((tenant: ITenant) => tenant.propertyId === property.id).length;

    if (tenantCount < 1) {
        throw new Error(`No tenants found for property ${property.id}`);
    }

    const monthlyPence = Math.round(property.monthlyRentPence / tenantCount);

    return format === "pounds"
        // format the pound values nicely to 2dp
        ? parseFloat((monthlyPence / pencePerPound).toFixed(2))
        : monthlyPence;
}

export default getMonthlyRentPerTenant;