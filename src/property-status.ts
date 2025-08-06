import {IPropertyData} from "./types";
import {getTenantCount} from "../data/tenant-data";

const propertyStatus = ["PROPERTY_VACANT" , "PARTIALLY_VACANT" , "PROPERTY_ACTIVE" , "PROPERTY_OVERDUE"] as const;
const getPropertyStatus = (property: IPropertyData): typeof propertyStatus[number] => {
    const tenantCount = getTenantCount(property.id);

    if (!tenantCount) {
        return "PROPERTY_VACANT";
    }

    if (Date.parse(property.tenancyEndDate) < Date.now()) {
        return "PROPERTY_OVERDUE";
    }

    // we know that the number of tenants is greater than 0, so it must be partially vacant,
    // or they're packed in there to capacity
    return property.capacity > tenantCount ? "PARTIALLY_VACANT" : "PROPERTY_ACTIVE";
}

export default getPropertyStatus;