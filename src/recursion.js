// recursion
// write 2 factorial functions, one using iteration and the other using recursion, function factorial(n) {}
//negative returns undefined
//0 is 1
//n!=n*(n-1)*(n-2)*(n-3)...3*2*(n-(n-1))

//use proper testing frameworks
//put down the expected values for testcases

//iteration method
//list of objects

const testCases = [
  { testCase: -1, expected: undefined },
  { testCase: 0, expected: 1 },
  { testCase: 1, expected: 1 },
  { testCase: 2, expected: 2 },
  { testCase: 3, expected: 6 },
  { testCase: 5, expected: 120 },
  { testCase: 10, expected: 3628800 },
];

function iterationFactorial(n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  let factor = 1;
  //can also start from 1
  // writing ++ or -- before variable is faster
  for (let i = n; i > 0; --i) {
    factor *= i;
  }
  return factor;
}

// console.log(iterationFactorial(5));

//recursion method
//console.log(`Factorial of 5 : ${5 * 4 * 3 * 2 * 1}`);

//emrty return returns undefined
// function test() {}
// console.log(test());

//try to solve n+1

function recursionFactorial(n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  return n * recursionFactorial(n - 1);
}

//for (let i = 0; i < testCases.length; i++) {} doesn't have index
//destructuring;
// for (const { testCase, expected } of testCases) {
//   console.log(iterationFactorial(testCase), expected);
// }

// write a function that returns the nth fibonacci sequence number, function fib(n) {}
//iterative and recursive
//starts at 0 1, n+1 is n-1 + n, is discrete
//negative returns undefined

// 0,1,1,2,3,5,8,13
// 0,1,2,3,4,5,6,7

function iteratedFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; ++i) {
    //x's scope is minimized which is better
    // const x = a + b;
    // a = b;
    // b = x;
    //destructuring
    [a, b] = [b, a + b];
    // b += a;
  }
  return b;
}

// for (let i = 0; i < 11; ++i) {
//   console.log(iteratedFibonacci(i));
// }

//    n
// 0  0
// 1  1
// 1  2
// 2  3
// 3  4
// 5  5
// 8  6
// 13 7
// 21 8
// 34 9
// 55 10

function recursedFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return recursedFibonacci(n - 1) + recursedFibonacci(n - 2);
}

// for (let i = 0; i < 100; ++i) {
//   console.log(recursedFibonacci(i));
// }

//for n=5:

// reverse a string using iteration and recursion, function reverse(string)

const testCaseStrings = [
  { testCase: "", expected: "" },
  { testCase: "A", expected: "A" },
  { testCase: "Hello World!", expected: "!dlroW olleH" },
  { testCase: "This is a string", expected: "gnirts a si sihT" },
  { testCase: "kayak", expected: "kayak" },
];

function iteratedReverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; --i) {
    reversedString += string[i];
  }
  return reversedString;
}

// for (const { testCase, expected } of testCaseStrings) {
//   console.log(iteratedReverseString(testCase), expected);
// }

// 0 1 2 3 4
// H E L L O length 5
// O L L E H

function recursedReverseString(string) {
  if (string.length <= 1) {
    return string;
  }
  return (
    string[string.length - 1] +
    recursedReverseString(string.substring(0, string.length - 1))
    //substring can be shortened by going the opposite direction
    //move the first char to the back
  );
}

function re2cursedInversedReverseString(string) {
  if (string.length <= 1) {
    return string;
  }
  return re2cursedInversedReverseString(string.substring(1)) + string[0];
}

// for (const { testCase, expected } of testCaseStrings) {
//   console.log(re2cursedInversedReverseString(testCase), expected);
// }

// // Hello World!
// console.log(testCaseStrings[2].testCase.slice(0, 4));
// console.log(testCaseStrings[2].testCase.substring(1));

export {
  iterationFactorial,
  recursionFactorial,
  iteratedFibonacci,
  recursedFibonacci,
  iteratedReverseString,
  recursedReverseString,
  re2cursedInversedReverseString,
};
