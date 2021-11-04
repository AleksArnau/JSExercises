function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

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
