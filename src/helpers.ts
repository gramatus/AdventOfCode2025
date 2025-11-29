import { appendFileSync, readFileSync, writeFileSync } from "fs";

export function logJsonPretty(...values: unknown[]) {
  console.log(...values.map((v) => JSON.stringify(v, null, 2)));
  appendFileSync(
    `${__dirname}/output.log`,
    values.map((v) => JSON.stringify(v, null, 2)).join("\t") + "\n"
  );
}
export function logJson(...values: unknown[]) {
  console.log(...values.map((v) => JSON.stringify(v)));
  appendFileSync(
    `${__dirname}/output.log`,
    values.map((v) => JSON.stringify(v)).join("\t") + "\n"
  );
}
export function logString(value: string | number | undefined) {
  console.log(value);
  appendFileSync(`${__dirname}/output.log`, value + "\n");
}
export function clearLog() {
  writeFileSync(`${__dirname}/output.log`, "");
}
/**
 *
 * @param filename the data file id to look for (e.g. 01-1 for the first data file on 01/12)
 * @param testData supply this (initially) to use a custom sample set (e.g. the example data from the task)
 * @returns the data content to work with
 */
export function getData(
  filename: `${number}${number}-${number}`,
  testData?: string,
  useFileData?: boolean
) {
  clearLog();
  if (!useFileData && testData) return testData;
  else return readFileSync(`${__dirname}/../data/${filename}.txt`, "utf-8");
}
