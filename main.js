"use strict";

import { solveQuadratic } from "./src/solver.js";
import { rl } from "./src/inputNumber.js";
import { getCoefficients } from "./src/getCoefficients.js";

const main = async () => {
  try {
    const { a, b, c } = await getCoefficients();
    console.log(solveQuadratic(a, b, c));
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
};

main();
