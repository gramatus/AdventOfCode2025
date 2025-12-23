import { getData, logString } from "../helpers";

// Add testdata (e.g. example data from the task) here when working out a solution.
const testData = `
987654321111111
811111111111119
234234234234278
818181911112111`;
let sum = 0; // Add to this when summing up stuff
const data = getData("03-1", testData, true); // Change to true to switch to the complete data set
const lines = data.split("\n");
// 1. Find the largest digit, excluding the last one
// 2. Find the larges digit after that one
for (const line of lines) {
  if (!line.trim()) continue; // empty line
  // Handle each line here, then add the result to sum
  let index = 0;
  const digits = new Array(12).fill(0);
  for (const char of line.split("")) {
    const digit = Number.parseInt(char);
    index++;
    const untilEnd = line.length - index;
    const startIdx = Math.max(0, 11 - untilEnd);
    for (let i = startIdx; i < digits.length; i++) {
      if (digit > digits[i]) {
        digits[i] = digit;
        digits.fill(0, i + 1);
        break;
      }
    }
  }
  // console.log(`Input: ${line}, `);
  // console.log(`Digits: ${digits.join("")}`);
  const joltage = Number.parseInt(digits.join(""));
  sum += joltage;
}
logString("Result: " + sum);
