import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputNumber = (message) => {
  return new Promise((resolve) => {
    const ask = () => {
      rl.question(message, (answer) => {
        const number = parseFloat(answer);
        if (!isNaN(number)) {
          resolve(number);
        } else {
          console.error(`Error. Expected a valid real number, got ${answer}`);
          ask();
        }
      });
    };
    ask();
  });
};

export { inputNumber, rl };
