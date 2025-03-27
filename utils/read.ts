import fs from "fs";
import path from 'path';
import assert from "assert";

/**
 
@param {string} filePath - The path to JSON file
@returns {} The parsed JSON object
@throws {} **/
const readJson = (filePath: string) => {

    assert.strictEqual(path.extname(filePath).toLocaleLowerCase(), ".json", "Error: File must be a JSON");
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export {
    readJson,
}