import { getData, logString } from "../helpers";

// Add testdata (e.g. example data from the task) here when working out a solution.
const testData = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
let sum = 0; // Add to this when summing up stuff
const data = getData("02-1", testData, true); // Change to true to switch to the complete data set
const lines = data.split(",");
for (const line of lines) {
  if (!line.trim()) continue; // empty line
  // Handle each line here, then add the result to sum
  const parts = line.split("-");
  const start = Number.parseInt(parts[0] ?? "");
  const end = Number.parseInt(parts[1] ?? "");
  if (Number.isNaN(start) || Number.isNaN(end)) {
    throw new Error(`Invalid number detected: ${parts[0]} or ${parts[1]}`);
  }
  // TODO: find all numbers that is the same number repeated twice
  for (let i = start; i < end + 1; i++) {
    const txtValue = i.toString();
    if (txtValue.length % 2 !== 0) {
      // console.log(
      //   `${txtValue} can't be the same thing repeated exactly twice since the length is ${txtValue.length}`,
      // );
      continue;
    }
    const a = txtValue.substring(0, txtValue.length / 2);
    const b = txtValue.substring(txtValue.length / 2);
    // console.log(`a: ${a}, b: ${b}`);
    if (a === b) {
      sum += i;
    }
  }
}
logString("Result: " + sum);
