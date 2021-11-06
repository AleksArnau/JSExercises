import { describe, expect, test } from "@jest/globals";
import { isAnagram, sort } from "../src/harder";

describe.each([
  { string1: "", string2: "", expected: false },
  { string1: "", string2: "Anagram", expected: false },
  { string1: "dog", string2: "god", expected: true },
  { string1: "Anagram", string2: "", expected: false },
  { string1: "Anagram", string2: "Anagrame", expected: false },
  { string1: "Anagram", string2: "margAna", expected: true },
  { string1: "Anagram", string2: "Anagram", expected: false },
  { string1: "Anagram", string2: "Anegeam", expected: false },
  { string1: "Anegeam", string2: "Anagram", expected: false },
  { string1: "aaab", string2: "baaa", expected: true },
])("", ({ string1, string2, expected }) => {
  test(`isAnagram given ${string1} and ${string2} should return ${expected}`, () => {
    expect(isAnagram(string1, string2)).toBe(expected);
  });
});

describe.each([
  { array: [], expected: [] },
  { array: [1], expected: [1] },
  { array: [3, 2, 1], expected: [1, 2, 3] },
  { array: [1, 2, 3], expected: [1, 2, 3] },
  { array: [3, 2, 1, 3, 2, 1], expected: [1, 1, 2, 2, 3, 3] },
  { array: [-1, 4, 0, -3, 1], expected: [-3, -1, 0, 1, 4] },
])("sort", ({ array, expected }) => {
  test(`given ${array} should return ${expected}`, () => {
    expect(sort(array)).toStrictEqual(expected);
  });
});
