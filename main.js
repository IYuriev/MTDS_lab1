"use strict";

import { solveQuadratic } from "./src/solver.js";
import { rl } from "./src/inputNumber.js";
import { getCoefficients } from "./src/getCoefficients.js";

const main = async () => {
  try {
    const { a, b, c } = await getCoefficients();
    const result = solveQuadratic(a, b, c);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
};

main();
