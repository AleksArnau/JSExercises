// TODO: benchmark isAnagram() against a sorting implementation

// runtime complexity O(n), space complexity O(n)
function isAnagram(string1, string2) {
  if (string1 === string2 || string1.length != string2.length) {
    return false;
  }

  const anagramTally = {};

  for (let letter of string1) {
    if (!(letter in anagramTally)) {
      anagramTally[letter] = 0;
    }

    ++anagramTally[letter];
  }

  for (let letter of string2) {
    if (!(letter in anagramTally)) {
      return false;
    }

    --anagramTally[letter];

    if (anagramTally[letter] === 0) {
      delete anagramTally[letter];
    }
  }

  return true;
}

// runtime complexity O(n^2), space complexity O(1)
function sort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j;
      }
    }

    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
  }

  return numbers;
}

// TODO: look up merge sort and quick sort

// function quickSort(numbers) {
//   return numbers;
// }

// function mergeSort(numbers) {
//   return numbers;
// }

export { isAnagram, sort };
