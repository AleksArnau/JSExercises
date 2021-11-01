// easy
//first 3 exercises labeled easy, uncomment the code at the bottom of each case to run the code through testCases

// find the largest number in an array, function findLargest(numbers) {} // if empty return negative infinity

const testCasesFindLargest = [
  { answer: -Infinity, testCase: [] },
  { answer: 1, testCase: [1] },
  { answer: 2, testCase: [2, 2, 2, 2] },
  { answer: 12, testCase: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] },
  { answer: 68, testCase: [1, 3, 5, 68, 0, -15] },
  { answer: 321, testCase: [321, 1, 2, 3] },
];

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

//uncomment this to run test cases for findLargestNumberInArray()
// console.log("Find largest number in array and best practice test cases:");
// for (const { answer, testCase } of testCasesFindLargest) {
//   const result = findLargestNumberInArray(testCase);
//   const best = bestPractice(testCase);
//   console.log(answer === result, answer, result);
//   console.log(answer === best, answer, best);
// }

// i18n, function shorten(string) {}
//empty string, one, two and three characters stay unchanged

const testCasesShortenerString = [
  "true", // t2e
  "desktop", // d5p
  "function", //f6n
  "accessibility", // a11y
  "internationalization", // i18n
  "", // ""
  "a", // a
  "in", // in
  "eat", // eat
];

function shortenerString(string) {
  if (string.length <= 3) {
    return string;
  }
  return string[0] + (string.length - 2) + string[string.length - 1];
}

//uncomment this to run test cases for shortenerString()
// console.log("String shortener test cases:");
// for (let i = 0; i < testCasesShortenerString.length; i++) {
//   console.log(testCasesShortenerString[i]);
//   console.log(shortenerString(testCasesShortenerString[i]));
// }

// print multiplication tables for 10 through 10, function printTable() {}
//tab separated numbers (use \t and \nto format)

// 1 2 3 4 5 6 7 8 9 10
// 2 4 6 8 10 ...
// 3 6 ...

//needs a wide console to properly format as
//tab was used to keep even spaces between numbers
function createMultTable() {
  let tableString = "";
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      tableString += i * j + "\t";
    }
    tableString += "\n";
  }
  return tableString;
}

// uncomment this
// console.log("Multiplication tables of one through ten");
// console.log(createMultTable());
