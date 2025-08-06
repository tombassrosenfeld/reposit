import path from "path";
import getCsvData from "./get-csv-data";
import type {ITenant} from "../src/types";

const tenantDataPath = path.join(__dirname, "../data/tenants.csv");
const tenantData = getCsvData<ITenant>(tenantDataPath);

export default tenantData;