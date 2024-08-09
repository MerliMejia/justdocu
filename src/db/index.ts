import * as fs from "fs";
import * as url from "node:url";

export type DbItemType = {
  title: string;
  desc: string;
};

export type DbDataType = {
  items: DbItemType[];
};

export const DbGetData: () => DbDataType = () => {
  try {
    const file = fs.readFileSync("tsDist/db/data.json");
    const dataObj = JSON.parse(file.toString());

    return dataObj;
  } catch (error) {
    console.log("Error reading data", error);
    return {
      items: [],
    };
  }
};

export const DbSaveData: (data: DbDataType) => void = (data) => {
  const dataBuffer = JSON.stringify(data);
  try {
    fs.writeFileSync("tsDist/db/data.json", dataBuffer);
  } catch (error) {
    console.log("Error writing data", error);
  }
};
