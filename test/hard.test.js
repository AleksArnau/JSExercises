import { describe, expect, test } from "@jest/globals";
import {
  fizzBuzz,
  hasDuplicate,
  findPlurality,
  findPlurality2,
  findMajority,
} from "../src/hard";

describe.each([
  {
    start: -5,
    end: 16,
    expected: [
      "buzz",
      -4,
      "fizz",
      -2,
      -1,
      "fizzbuzz",
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ],
  },
  {
    start: 0,
    end: 0,
    expected: [],
  },
])("fizzBuzz", ({ start, end, expected }) => {
  test(`given ${start} and ${end} should return ${expected}`, () => {
    expect(fizzBuzz(start, end)).toStrictEqual(expected);
  });
});

// contains duplicate int, function hasDuplicate(numbers) {}
// 2. given a list of numbers, return whether duplicates exist

describe.each([
  { input: [], expected: false },
  { input: [1], expected: false },
  { input: [1, 1], expected: true },
  { input: [1, 2, 3, 4, 5], expected: false },
  { input: [0, 2, 3, 1, 1], expected: true },
  { input: [-1, 2, 3, 4, 1], expected: false },
])("hasDuplicate", ({ input, expected }) => {
  test(`given ${input} should return ${expected}`, () => {
    expect(hasDuplicate(input)).toBe(expected);
  });
});
