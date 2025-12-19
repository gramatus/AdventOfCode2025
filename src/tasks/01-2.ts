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
const moves: { dir: Direction; distance: number; rotations?: number }[] = [];
let pos: number = 50;
let zeroCount = 0;
for (const line of lines) {
  if (!line.trim()) continue; // empty line
  // Handle each line here, then add the result to sum
  const move: (typeof moves)[number] = {
    dir: line.substring(0, 1) as Direction,
    distance: Number.parseInt(line.substring(1)),
  };
  // Remove anything that rotates more than one round
  move.rotations = (move.distance - (move.distance % 100)) / 100;
  zeroCount += move.rotations;
  move.distance = move.distance % 100;
  pos = move.dir === "L" ? pos - move.distance : pos + move.distance;
  console.log(`> Pos moved to ${pos}`);
  if (pos >= 100) {
    if (pos === 100) {
      // If at exactly 100, we return to 0 and count the exact match with zero (i.e. we didn't actually *pass* zero)
    } else {
      zeroCount++;
    }
    pos = pos - 100;
    // console.log(`> Pos reduced to ${pos}`);
  }
  if (pos < 0) {
    if (Math.abs(pos) === move.distance) {
      // We might be at a negative number, but we did not pass go (zero) **again**
    } else {
      zeroCount++;
    }
    pos = 100 + pos;
    // console.log(`> pos increased to ${pos}`);
  }
  if (pos === 0) {
    zeroCount++;
  }
  // console.log(`Moved ${line}, now at ${pos}, passes by zero: ${zeroCount}`);
}
sum = zeroCount;
// logJson(moves);
logString("Result: " + sum);
