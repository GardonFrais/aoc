import { isArraySortedAsc, isArraySortedDesc } from "./is-array-sorted";

describe("check if array is sorted asc", () => {
  test("Should be sorted", () => {
    const input = [1, 2, 2, 3, 5, 7];
    const expected = true;
    expect(isArraySortedAsc(input)).toStrictEqual(expected);
  });
  test("Shouldnt be sorted", () => {
    const input = [7, 5, 3, 4, 2, 1];
    const expected = false;
    expect(isArraySortedAsc(input)).toStrictEqual(expected);
  });
});

describe("check if array is sorted desc", () => {
  test("Should be sorted", () => {
    const input = [7, 6, 6, 2, 2, 1];
    const expected = true;
    expect(isArraySortedDesc(input)).toStrictEqual(expected);
  });
  test("Shouldnt be sorted", () => {
    const input = [7, 5, 3, 4, 2, 1];
    const expected = false;
    expect(isArraySortedDesc(input)).toStrictEqual(expected);
  });
});