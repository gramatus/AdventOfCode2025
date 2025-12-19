import { getData, logJson, logJsonPretty, logString } from "../helpers";

// Add testdata (e.g. example data from the task) here when working out a solution.
const testData = `
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`;
let sum = 0; // Add to this when summing up stuff
const data = getData("01-1", testData, true); // Change to true to switch to the complete data set
const lines = data.split("\n");
type Direction = "L" | "R";
const moves: { dir: Direction; distance: number }[] = [];
let pos: number = 50;
let zeroCount = 0;
for (const line of lines) {
  if (!line.trim()) continue; // empty line
  // Handle each line here, then add the result to sum
  const move = {
    dir: line.substring(0, 1) as Direction,
    distance: Number.parseInt(line.substring(1)),
  };
  // Remove anything that rotates more than one round
  move.distance = move.distance % 100;
  pos = move.dir === "L" ? pos - move.distance : pos + move.distance;
  // console.log(`Pos moved to ${pos}`);
  if (pos >= 100) {
    pos = pos - 100;
    console.log(`Pos reduced to ${pos}`);
  }
  if (pos < 0) {
    pos = 100 + pos;
    console.log(`pos increased to ${pos}`);
  }
  // console.log(`Moved ${line}, now at ${pos}`);
  if (pos === 0) {
    zeroCount++;
  }
}
sum = zeroCount;
// logJson(moves);
logString("Result: " + sum);
