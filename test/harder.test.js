import { describe, expect, test } from "@jest/globals";
import { isAnagram, sort } from "../src/harder";
const { describe, expect, test } = require("@jest/globals");
const { isAnagram, sort } = require("./harder");

test("Empty String is not an anagram to an empty string", () => {
  expect(isAnagram("", "")).toBe(false);
});

test("A word is not an anagram to itself", () => {
  expect(isAnagram("pepsi", "pepsi")).toBe(false);
});

test("A different word is not an anagram", () => {
  expect(isAnagram("pepsi", "cola")).toBe(false);
});

test("An anagram test case", () => {
  expect(isAnagram("pepsi", "ispep")).toBe(true);
});
