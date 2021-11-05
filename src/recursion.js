function iteratedFactorial(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  let factor = 1;

  for (let i = n; i > 0; --i) {
    factor *= i;
  }

  return factor;
}

function recursedFactorial(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  return n * recursedFactorial(n - 1);
}

function iteratedFibonacci(n) {
  if (n === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 1; i < n; ++i) {
    [a, b] = [b, a + b];
  }

  return b;
}

//TODO redo this function using dynamic programming, memoization is also relevant
function recursedFibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return recursedFibonacci(n - 1) + recursedFibonacci(n - 2);
}

function iteratedReverseString(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; --i) {
    reversedString += string[i];
  }

  return reversedString;
}

function recursedReverseString(string) {
  if (string.length <= 1) {
    return string;
  }

  return recursedReverseString(string.substring(1)) + string[0];
}

export {
  iteratedFactorial,
  recursedFactorial,
  iteratedFibonacci,
  recursedFibonacci,
  iteratedReverseString,
  recursedReverseString,
};
