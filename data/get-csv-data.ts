
// Read and parse the CSV file synchronously for simplicity
import * as fs from "node:fs";
import { parse } from "csv-parse/sync";

// the numeric columns parameter means we can specify which columns
// should be numbers and use the cast option to convert them
const getCsvData = <T>(dataPath: string, numericColumns?: string[]): T[] => {
    try {
        const fileContent = fs.readFileSync(dataPath, "utf-8");
        const records = parse(fileContent, {
            columns: true, // Use the first row as headers
            skip_empty_lines: true,
            cast: (value, context) => {
                // Convert specific columns to numbers
                if (numericColumns?.includes(context.column.toString())) {
                    return parseInt(value, 10);
                }

                return value;
            }
        });

        return records as T[];
    } catch (error) {
        console.error("Error reading or parsing the CSV file:", error);
        return [];
    }
};

export default getCsvData;