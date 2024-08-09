import * as fs from "fs";
import * as url from "url";

const copyIndex = () => {
  fs.copyFileSync("src/frontend/index.html", "tsDist/frontend/index.html");
};

copyIndex();
