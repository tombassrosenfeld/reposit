import type {IPropertyData} from "./types";
import {getTenantCount} from "../data/tenant-data";

const pencePerPound = 100;

const getMonthlyRentPerTenant = (property: IPropertyData, format: "pounds" | "pence" = "pounds") => {
    const tenantCount = getTenantCount(property.id);

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