"use strict";

import { readFile } from "./readFile.js";
import { inputNumber } from "./inputNumber.js";

const getCoefficients = async () => {
  if (process.argv.length > 2) {
    return readFile(process.argv[2]);
  } else {
    const a = await inputNumber("a = ");
    const b = await inputNumber("b = ");
    const c = await inputNumber("c = ");
    return { a, b, c };
  }
};

export { getCoefficients };
