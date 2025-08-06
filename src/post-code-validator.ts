import propertyData from "../data/property-data";
import {postcodeValidator} from "postcode-validator";
import type {IPropertyData} from "./types";

const getInvalidPostcodes = () =>
    propertyData.reduce((invalidProperties, property): IPropertyData["id"][] => {
        if (!postcodeValidator(property.postcode, "GB")) {
            return [...invalidProperties, property.id];
        }
        return invalidProperties;
    }, [])

export default getInvalidPostcodes;