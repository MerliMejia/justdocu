import { ExecutableScript } from "./utils";
import * as fs from "fs";

export const executable: ExecutableScript = new ExecutableScript();

const copyDataJson = () => {
  fs.copyFileSync("src/db/data.json", "tsDist/db/data.json");
};

executable.actions.push(copyDataJson);
