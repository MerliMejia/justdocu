import * as fs from "fs";
import { ExecutableScript } from "./utils";

export const executable = new ExecutableScript();

const copyIndex = () => {
  fs.copyFileSync("src/frontend/index.html", "tsDist/frontend/index.html");
};

executable.actions.push(copyIndex);
