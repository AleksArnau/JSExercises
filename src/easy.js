function findLargestNumberInArray(array) {
  let largestNumber = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

function shortenString(string) {
  if (string.length <= 3) {
    return string;
  }
  return string[0] + (string.length - 2) + string[string.length - 1];
}

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
