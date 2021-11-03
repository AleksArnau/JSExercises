//medium

// determine if a word is a palindrome, function isPalindrome(string) {}

// const testCasesIsPalindrome = [
//   "true", // false sL4
//   "tret", // false sL4
//   "tredt", //false sL5
//   "desktop", // false
//   "function", //false
//   "accessibility", //false
//   "internationalization", // false
//   "", // true
//   "in", // false
//   "lol", // true
//   "racecar", //true
//   "kayak", //true
//   "madeupworddrowpuedam", //true
// ];

function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// function cheapIsPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }

//uncomment to run test cases for isPalindrome()
// for (let i = 0; i < testCasesIsPalindrome.length; i++) {
//   console.log(cheapIsPalindrome(testCasesIsPalindrome[i]));
// }

// sum 0 to n with even/odd/all, function sumToN(n, type) {}
//

function sumToN(n, type) {
  let typeIncrement = 1;
  let i = 1;
  let sum = 0;
  if (type === "even") {
    typeIncrement = 2;
    i = 2;
  } else if (type === "odd") {
    typeIncrement = 2;
  }
  for (; i <= n; i += typeIncrement) {
    sum += i;
  }
  return sum;
}

// for (let i = 0; i < testCases.length; i++) {
//   for (let j = 0; j < testCaseTypes.length; j++) {
//     console.log(
//       "testcase ",
//       testCases[i],
//       "type",
//       testCaseTypes[j],
//       sumToN(testCases[i], testCaseTypes[j])
//     );
//   }
// }

// print pyramid, function printPyramid(height) {} middle aligned

// height = 0
// height = 1
// *

// height = 2
//  *
// ***

// height = 3
//   *
//  ***
// *****

// heigth = 4
//    * h-(i+1) + 2i+1 i=0
//   *** h-(i+1) + 2i+1 i=1
//  ***** h-(i+1) + 2i+1 i=2
// *******

function makePyramid(height) {
  let pyramid = "";
  for (let i = 0; i < height; i++) {
    pyramid += " ".repeat(height - (i + 1)) + "*".repeat(2 * i + 1);
    if (i < height - 1) {
      pyramid += "\n";
    }
  }
  return pyramid;
}

export { isPalindrome, sumToN, makePyramid };
