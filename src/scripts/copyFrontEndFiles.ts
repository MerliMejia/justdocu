import * as fs from "fs";
import { ExecutableScript } from "./utils";

export const executable = new ExecutableScript();

const copyIndexes = () => {
  fs.copyFileSync("src/frontend/index.html", "tsDist/frontend/index.html");
  fs.copyFileSync("src/frontend/index.css", "tsDist/frontend/index.css");
};

executable.actions.push(copyIndexes);
