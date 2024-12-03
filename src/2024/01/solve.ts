import { readFileSync } from 'fs';

export const solve = (filename: string): number => {
  const entryFile: Buffer = readFileSync(filename);
  const entryFileLines: string[] = entryFile.toString().split('\n');
  let firstColumn: number[] = [];
  let secondColumn: number[] = [];

  entryFileLines.forEach(entryFileLine => {
    const lineValues: string[] = entryFileLine.split(/\s+/);
    firstColumn.push(parseInt(lineValues[0].trim()));
    secondColumn.push(parseInt(lineValues[1].trim()));
  });

  firstColumn.sort((a, b) => a - b);
  secondColumn.sort((a, b) => a - b);

  return firstColumn.map((firstValue, index) => {
    const secondValue: number = secondColumn[index];
    const result: number = firstValue - secondValue;
    return (result > 0) ? result : -result;
  }).reduce((acc, curr) => acc + curr, 0);
}