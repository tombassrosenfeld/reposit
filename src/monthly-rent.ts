import type {IPropertyData, ITenant} from "./types";
import tenantData from "../data/tenantData";

const pencePerPound = 100;

const getMonthlyRentPerTenant = (property: IPropertyData, format: "pounds" | "pence" = "pounds") => {
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