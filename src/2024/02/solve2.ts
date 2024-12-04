import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/split-into-lines";
import { WHITESPACE } from "../../lib/regex";
import { isArraySortedAsc, isArraySortedDesc } from "../../lib/is-array-sorted";

export const solve = (filename: string): number => {
  const input: string = readFileSync(filename, 'utf8').toString();
  const parsedInput: number[][] = parse(input);

  return parsedInput
    .map(problemDampener)
    .filter((line: boolean) => line)
    .length;
}

const parse = (input: string): number[][] => {
  return splitIntoLines(input)
    .map((line) => line.split(WHITESPACE).map(value => parseInt(value)));
}

const problemDampener = (line: number[]): boolean => {
  if (isLineSafe(line)) return true;
  return line.reduce((acc, _, i): boolean => acc || isLineSafe(line.filter((_, index) => index < i || index > i)), false);
}

const isLineSafe = (line: number[]): boolean => {
  if (isArraySortedAsc(line)) {
    return line.reduce((acc, curr, i) => 
      i >= (line.length - 1) ?
      acc :
      acc && (curr != line[i + 1] && curr >= line[i + 1] - 3), true);
  }

  if (isArraySortedDesc(line)) {
    return line.reduce((acc, curr, i) => 
      i >= (line.length - 1) ?
      acc :
      acc && (curr != line[i + 1] && curr <= line[i + 1] + 3), true);
  }

  return false;
}