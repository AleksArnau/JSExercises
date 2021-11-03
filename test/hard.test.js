import { describe, expect, test } from "@jest/globals";
import {
  fizzBuzz,
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
