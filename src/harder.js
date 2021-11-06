// harder

// check if anagram, function isAnagram(string1, string2) {}
// case insensitive, space sensitive, a word cannot be it's own anagram
// compare the two string against ea. other /w 1 object

// example with string1="dog" and string2="god"
// anagramTally takes on string1 >>> { d:1 , o:1 , g:1 }
// for of should work for a string e.g.
// for (const c of text) {
//   console.log(c)
// }
// can check back previous exercises for how to implement xTally
// we check it agaisnt string2 with the same dissection
// if the tally of each letter matches we return true

function isAnagram(string1, string2) {
  if (string1 === string2 || string1.length != string2.length) {
    return false;
  }

  const anagramTally1 = {};
  const anagramTally2 = {};

  for (let char of string1) {
    if (!(char in anagramTally1)) {
      anagramTally1[char] = 0;
    }
    ++anagramTally1[char];
  }

  for (let char of string2) {
    if (!(char in anagramTally2)) {
      anagramTally2[char] = 0;
    }
    ++anagramTally2[char];
  }

  
  for (let letter of Object.keys(anagramTally1)) {
    if (anagramTally1[letter] != anagramTally2[letter]) {
      return false;
    }
  }
  return true;
}

// sort a list in place, function sort(numbers) {}
function sort(numbers) {
  let a = numbers;
  return "Some string";
}

export { isAnagram, sort };
