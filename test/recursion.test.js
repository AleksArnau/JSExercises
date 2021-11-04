import { describe, expect, test } from "@jest/globals";
import {
  iterationFactorial,
  recursionFactorial,
  iteratedFibonacci,
  recursedFibonacci,
  iteratedReverseString,
  recursedReverseString,
  re2cursedInversedReverseString,
} from "../src/recursion";

describe.each([
  { input: -1, expected: undefined },
  { input: 0, expected: 1 },
  { input: 1, expected: 1 },
  { input: 2, expected: 2 },
  { input: 3, expected: 6 },
  { input: 5, expected: 120 },
  { input: 10, expected: 3628800 },
])("With", ({ input, expected }) => {
  test(`iterationFactorial given ${input} should return ${expected}`, () => {
    expect(iterationFactorial(input)).toBe(expected);
  });
  test(`recursionFactorial given ${input} should return ${expected}`, () => {
    expect(recursionFactorial(input)).toBe(expected);
  });
});
