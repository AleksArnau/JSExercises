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

//now we do it with only 1 object, start writing from line 32

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
function sort(numbers) {
  let a = numbers;
  return "Some string";
}

export { isAnagram, sort };
