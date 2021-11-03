// easy

// find the largest number in an array, function findLargest(numbers) {} // if empty return negative infinity

function findLargestNumberInArray(array) {
  let largestNumber = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

//same thing using a single line of code
function bestPractice(array) {
  return Math.max(...array);
}

//testCases have been moved over to ../test/easy.test.js
//keeping this here as a comment
// const testCasesFindLargest = [
//   { answer: -Infinity, testCase: [] },
//   { answer: 1, testCase: [1] },
//   { answer: 2, testCase: [2, 2, 2, 2] },
//   { answer: 12, testCase: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] },
//   { answer: 68, testCase: [1, 3, 5, 68, 0, -15] },
//   { answer: 321, testCase: [321, 1, 2, 3] },
// ];
// console.log("Find largest number in array and best practice test cases:");
// for (const { answer, testCase } of testCasesFindLargest) {
//   const result = findLargestNumberInArray(testCase);
//   const best = bestPractice(testCase);
//   console.log(answer === result, answer, result);
//   console.log(answer === best, answer, best);
// }

// i18n, function shorten(string) {}
//empty string, one, two and three characters stay unchanged

function shortenString(string) {
  if (string.length <= 3) {
    return string;
  }
  return string[0] + (string.length - 2) + string[string.length - 1];
}

//testCases moved over to ../test/easy.test.js
// const testCasesshortenString = [
//   "true", // t2e
//   "desktop", // d5p
//   "function", //f6n
//   "accessibility", // a11y
//   "internationalization", // i18n
//   "", // ""
//   "a", // a
//   "in", // in
//   "eat", // eat
// ];
// console.log("String shortener test cases:");
// for (let i = 0; i < testCasesshortenString.length; i++) {
//   console.log(testCasesshortenString[i]);
//   console.log(shortenString(testCasesshortenString[i]));
// }

// print multiplication tables for 10 through 10, function printTable() {}
//tab separated numbers (use \t and \nto format)

// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 ...
// 3 6 ...

//needs a wide console to properly format as
//tab was used to keep even spaces between numbers
function createTimesTable() {
  let tableString = "";
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      tableString += i * j;
      if (j < 10) {
        tableString += " ";
      }
    }
    if (i < 10) {
      tableString += "\n";
    }
  }
  return tableString;
}

export { findLargestNumberInArray, shortenString, createTimesTable };
