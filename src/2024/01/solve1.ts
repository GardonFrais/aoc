import { readFileSync } from 'fs';
import { splitIntoLines } from '../../lib/split-into-lines';
import { WHITESPACE } from '../../lib/regex';
import { zipArrays } from '../../lib/zip-arrays';

type ParsedInput = {
  left: number[];
  right: number[];
}

export const solve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const { left, right } = parse(input);

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  return zipArrays(left, right)
    .map(([leftValue, rightValue]) => Math.abs(leftValue - rightValue))
    .reduce((acc, curr) => acc + curr, 0);
}

const parse = (input: string): ParsedInput => {
  const inputLines: string[] = splitIntoLines(input);
  return inputLines.map((line) => line.split(WHITESPACE))
    .reduce((acc: ParsedInput, [left, right]: string[]): ParsedInput => {
      acc.left.push(parseInt(left));
      acc.right.push(parseInt(right));
      return acc;
    }, { left: [], right: [] } as ParsedInput);
}