"use strict";

const solveQuadratic = (a, b, c) => {
  if (a === 0) {
    throw new Error("Error. a cannot be 0");
  }

  const D = b * b - 4 * a * c;

  if (D > 0) {
    const sqrtD = Math.sqrt(D);
    return {
      message: "There are 2 roots",
      x1: (-b + sqrtD) / (2 * a),
      x2: (-b - sqrtD) / (2 * a),
    };
  } else if (D === 0) {
    return {
      message: "There are 1 roots",
      x1: -b / (2 * a),
    };
  }

  return { message: "There are 0 roots" };
};

export { solveQuadratic };
