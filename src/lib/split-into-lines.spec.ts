import { splitIntoLines } from "./split-into-lines";

describe("Split string into lines", () => {
  test("Should split into 1 line", () => {
    const input = "Line 1";
    const expected = ["Line 1"];
    expect(splitIntoLines(input)).toStrictEqual(expected);
  });
  test("Should split into 3 lines", () => {
    const input = "Line 1\nLine 2\nLine 3";
    const expected = ["Line 1", "Line 2", "Line 3"];
    expect(splitIntoLines(input)).toStrictEqual(expected);
  });
  test("Should split into 4 lines", () => {
    const input = "Line 1\nLine 2\nLine 3\n";
    const expected = ["Line 1", "Line 2", "Line 3", ""];
    expect(splitIntoLines(input)).toStrictEqual(expected);
  });
});