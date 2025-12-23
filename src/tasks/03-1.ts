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
  let largest = 0;
  let second = 0;
  let index = 0;
  // console.log(`chars: ${line.length}`);
  for (const char of line.split("")) {
    const digit = Number.parseInt(char);
    index++;
    if (digit > largest && index < line.length) {
      largest = digit;
      second = 0;
    } else if (digit > second) {
      second = digit;
    }
    // if (index >= line.length) {
    //   console.log(`Index: ${index}`);
    // }
  }
  if (index !== 100) {
    throw new Error("umm");
  }
  const joltage = Number.parseInt(`${largest}${second}`);
  // console.log(`largest: ${largest}, second: ${second}, joltage: ${joltage}`);
  sum += joltage;
}
logString("Result: " + sum);
