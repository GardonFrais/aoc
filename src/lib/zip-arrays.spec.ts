import { zipArrays } from "./zip-arrays";

describe("Zip arrays", () => {
  test("Should zip 2 arrays", () => {
    const input1 = [1, 2, 3];
    const input2 = ['A', 'B', 'C'];
    const expected = [[1, 'A'], [2, 'B'], [3, 'C']];
    expect(zipArrays(input1, input2)).toStrictEqual(expected);
  });
});