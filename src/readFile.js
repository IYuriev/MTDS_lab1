"use strict";

import fs from "node:fs/promises";

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const coefficients = data.trim().replace(/\s+/g, " ");
    const [a, b, c] = coefficients.split(" ").map(Number);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error("Invalid file format");
    }

    return { a, b, c };
  } catch (error) {
    throw new Error(`File ${filePath} does not exist`);
  }
};

export { readFile };
