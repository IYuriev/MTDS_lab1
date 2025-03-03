import { solveQuadratic } from "./src/solver.js";
import { inputNumber, rl } from "./src/inputNumber.js";

const main = async () => {
  const a = await inputNumber("a = ");
  const b = await inputNumber("b = ");
  const c = await inputNumber("c = ");
  rl.close();

  console.log(solveQuadratic(a, b, c));
};

main();
