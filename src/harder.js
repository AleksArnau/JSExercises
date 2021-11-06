// harder

// check if anagram, function isAnagram(string1, string2) {}
// case insensitive, space sensitive, a word cannot be it's own anagram
// compare the two string against ea. other /w 1 object

//trick was to add to the tally and then substract

// runtime complexity O(n), space complexity O(n)
// TODO: benchmark this against a sorting implementation

// function isAnagram(stringA, stringB) {
//   // Sanitizing
//   stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
//   stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

//   // sorting
//   const stringASorted = stringA.split("").sort().join("");
//   const stringBSorted = stringB.split("").sort().join("");

//   return stringASorted === stringBSorted;
// }

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

// sort a list in place, function sort(numbers) {}
// a.k.a use the same array to sort, returns numbers
// given array of numbers, sorted in ascending order >>> 1,2,3
// naive insertion sort

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

export { isAnagram, sort };
