import { readFileSync } from "fs";

export const solve = (filename: string): number => {
  const input: string = readFileSync(filename, 'utf8').toString();

  return parseDoAndDont(input)
    .map(entry => parseMul(entry).reduce((acc, curr) => acc + (curr[0] * curr[1]), 0))
    .reduce((acc, curr) => acc + curr, 0);
}

const parseDoAndDont = (input: string): string[] => {
  return input.split('do()').map(value => value.split('don\'t')[0]);
}

const parseMul = (input: string): [number, number][] => {
  return [...input.matchAll(/mul\((\d*),(\d*)\)/g)].map((match: string[]) => ([parseInt(match[1]), parseInt(match[2])]));
};