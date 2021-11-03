import { describe, expect, test } from "@jest/globals";
import { isPalindrome, sumToN, makePyramid } from "../src/medium";

describe.each([
  { input: "true", expected: false },
  { input: "tret", expected: false },
  { input: "tredt", expected: false },
  { input: "desktop", expected: false },
  { input: "function", expected: false },
  { input: "accessibility", expected: false },
  { input: "internationalization", expected: false },
  { input: "a", expected: true },
  { input: "in", expected: false },
  { input: "kek", expected: true },
  { input: "racecar", expected: true },
  { input: "madeupworddrowpuedam", expected: true },
])("isPalindrome", ({ input, expected }) => {
  test(`given ${input} should return ${expected}`, () => {
    expect(isPalindrome(input)).toBe(expected);
  });
});

describe.each([
  { n: 1, type: "any", expected: 1 },
  { n: 2, type: "any", expected: 3 },
  { n: 5, type: "any", expected: 15 },
  { n: 1, type: "even", expected: 0 },
  { n: 2, type: "even", expected: 2 },
  { n: 5, type: "even", expected: 6 },
  { n: 1, type: "odd", expected: 1 },
  { n: 2, type: "odd", expected: 1 },
  { n: 5, type: "odd", expected: 9 },
])("sumToN", ({ n, type, expected }) => {
  test(`given ${n} and ${type} should return ${expected}`, () => {
    expect(sumToN(n, type)).toBe(expected);
  });
});

describe.each([
  { height: -1, expected: "" },
  { height: 0, expected: "" },
  { height: 1, expected: "*" },
  { height: 3, expected: "  *\n ***\n*****" },
])("makePyramid", ({ height, expected }) => {
  test(`given ${height} should return ${expected}`, () => {
    expect(makePyramid(height)).toBe(expected);
  });
});
