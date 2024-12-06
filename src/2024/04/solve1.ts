import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/split-into-lines";

const SEARCHED_WORD = 'XMAS';
const REVERSED_SEARCHED_WORD = SEARCHED_WORD.split('').reverse().join('');

export const solve = (filename: string): number => {
  const input: string = readFileSync(filename, 'utf8').toString();
  const matrix: string[][] = splitIntoLines(input).map(line => line.split(''));
  return countXMAS(matrix);
}

const countXMAS = (input: string[][]): number => {
  let xmasCount: number = 0;
  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      if (checkHorizontal(input, row, column, SEARCHED_WORD)) xmasCount += 1;
      if (checkHorizontal(input, row, column, REVERSED_SEARCHED_WORD)) xmasCount += 1;
      if (checkVertical(input, row, column, SEARCHED_WORD)) xmasCount += 1;
      if (checkVertical(input, row, column, REVERSED_SEARCHED_WORD)) xmasCount += 1;
      if (checkTopLeftBottomRightDiagonal(input, row, column, SEARCHED_WORD)) xmasCount += 1;
      if (checkTopLeftBottomRightDiagonal(input, row, column, REVERSED_SEARCHED_WORD)) xmasCount += 1;
      if (checkTopRightBottomLeftDiagonal(input, row, column, SEARCHED_WORD)) xmasCount += 1;
      if (checkTopRightBottomLeftDiagonal(input, row, column, REVERSED_SEARCHED_WORD)) xmasCount += 1;
    }
  }
  return xmasCount;
}

const checkHorizontal = (input: string[][], row: number, column: number, searchedWord: string): boolean => {
  if (column + (searchedWord.length - 1) >= input[row].length) return false;
  for (let i = 0; i < searchedWord.length; i++) {
    if (input[row][column + i] !== searchedWord[i]) {
      return false;
    }
  }
  return true;
}

const checkVertical = (input: string[][], row: number, column: number, searchedWord: string): boolean => {
  if (row + (searchedWord.length - 1) >= input.length) return false;
  for (let i = 0; i < searchedWord.length; i++) {
    if (input[row + i][column] !== searchedWord[i]) {
      return false;
    }
  }
  return true;
}

const checkTopLeftBottomRightDiagonal = (input: string[][], row: number, column: number, searchedWord: string): boolean => {
  if (row + (searchedWord.length - 1) >= input.length) return false;
  if (column + (searchedWord.length - 1) >= input[row].length) return false;
  for (let i = 0; i < searchedWord.length; i++) {
    if (input[row + i][column + i] !== searchedWord[i]) {
      return false;
    }
  }
  return true;
};

const checkTopRightBottomLeftDiagonal = (input: string[][], row: number, column: number, searchedWord: string): boolean => {
  if (row + (searchedWord.length - 1) >= input.length) return false;
  if (column - (searchedWord.length - 1) < 0) return false;
  for (let i = 0; i < searchedWord.length; i++) {
    if (input[row + i][column - i] !== searchedWord[i]) {
      return false;
    }
  }
  return true;
};