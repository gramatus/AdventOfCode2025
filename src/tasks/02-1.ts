import { getData, logString } from "../helpers";

// Add testdata (e.g. example data from the task) here when working out a solution.
const testData = `
`;
let sum = 0; // Add to this when summing up stuff
const data = getData("01-1", testData, false); // Change to true to switch to the complete data set
const lines = data.split("\n");
for (const line of lines) {
  if (!line.trim()) continue; // empty line
  // Handle each line here, then add the result to sum
}
logString("Result: " + sum);
