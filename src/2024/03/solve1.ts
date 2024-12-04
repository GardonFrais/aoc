import { readFileSync } from "fs";

export const solve = (filename: string): number => {
  const input: string = readFileSync(filename, 'utf8').toString();
  return parse(input).reduce((acc, curr) => acc + (curr[0] * curr[1]), 0);
}

const parse = (input: string): [number, number][] => {
  return [...input.matchAll(/mul\((\d*),(\d*)\)/g)].map((match: string[]) => ([parseInt(match[1]), parseInt(match[2])]));
};