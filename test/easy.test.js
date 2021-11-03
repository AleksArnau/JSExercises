import { describe, expect, test } from "@jest/globals";
import {
  findLargestNumberInArray,
  shortenString,
  createTimesTable,
} from "../src/easy";

describe.each([
  { expected: -Infinity, input: [] },
  { expected: 1, input: [1] },
  { expected: 2, input: [2, 2, 2, 2] },
  { expected: 12, input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] },
  { expected: 68, input: [1, 3, 5, 68, 0, -15] },
  { expected: 321, input: [321, 1, 2, 3] },
])("findLargestNumberInArray", ({ input, expected }) => {
  test(`given ${input} should return ${expected}`, () => {
    expect(findLargestNumberInArray(input)).toBe(expected);
  });
});

describe.each([
  { expected: "t2e", input: "true" },
  { expected: "d5p", input: "desktop" },
  { expected: "f6n", input: "function" },
  { expected: "a11y", input: "accessibility" },
  { expected: "i18n", input: "internationalization" },
  { expected: "", input: "" },
  { expected: "a", input: "a" },
  { expected: "in", input: "in" },
  { expected: "eat", input: "eat" },
])("shortenString", ({ input, expected }) => {
  test(`given ${input} should return ${expected}`, () => {
    expect(shortenString(input)).toBe(expected);
  });
});

describe("createTimesTable", () => {
  test(`should return a pretty long string`, () => {
    const expected = `1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100`;
    expect(createTimesTable()).toBe(expected);
  });
});
