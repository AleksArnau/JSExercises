// hard JavaScript exercises

// fizzbuzz, function fizzbuzz(start, end) {}
// 1. print fizz when the number is divisible by 3, buzz for 5, fizzbuzz when divisible by both, if none are true, just print the number
//changed function to return an Array instead
//0 is divisible by every number but itself

// // smallest?
// for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

function fizzBuzz(start, end) {
  let fizzBuzz = [];
  for (let i = start; i < end; i++) {
    if (i % 15 === 0) {
      fizzBuzz.push("fizzbuzz");
    } else if (i % 3 === 0) {
      fizzBuzz.push("fizz");
    } else if (i % 5 === 0) {
      fizzBuzz.push("buzz");
    } else {
      fizzBuzz.push(i);
    }
  }
  return fizzBuzz;
}

// contains duplicate int, function hasDuplicate(numbers) {}
// 2. given a list of numbers, return whether duplicates exist

function hasDuplicate(numbers) {
  let numObjects = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in numObjects) {
      return true;
    } else {
      numObjects[numbers[i]] = 1;
    }
  }
  return false;
}

// find Plurality element, function findPlurality(items) {}
// 3. given a list of items, return the most numerous items
//no items is undefined
//same ammount of most items returns both

function findPlurality(items) {
  if (items.length === 0) {
    return undefined;
  }
  //this'll have {egg : 2 , butter : 2} at the end
  let itemCountObject = {};

  for (let i = 0; i < items.length; i++) {
    //we set #times each item's present
    //ex {butter : 2, cocoa : 1}
    if (items[i] in itemCountObject) {
      itemCountObject[items[i]]++;
    } else {
      itemCountObject[items[i]] = 1;
    }
  }

  //we check which is the biggest stack
  let maxCount = 0;
  for (const countKey in itemCountObject) {
    if (itemCountObject[countKey] > maxCount) {
      maxCount = itemCountObject[countKey];
    }
  }

  //create the array of answers
  let PluralityArray = [];
  for (const countKey in itemCountObject) {
    if (itemCountObject[countKey] === maxCount) {
      PluralityArray.push(countKey);
    }
  }

  //return array of answers
  return PluralityArray;
}

let testCasesMajority = [
  ["milk", "milk", "milk", "milk", "egg", "egg", "egg", "egg", "egg", "egg"], // returns undefined
  ["milk", "egg", "butter", "shea butter", "egg", "egg", "egg"], // returns egg
  ["milk", "egg", "butter", "butter", "shea butter", "egg"], // returns undefined
  ["milk", "egg", "butter", "shea butter"], //returns undefined
  ["milk", "egg"], //returns undefined
  ["milk", "milk"], //returns milk
  ["milk"], //returns milk
  [], //returns undefined
];

/*
var majorityElement = function (nums) {
  // Boyer-Moore Voting Algorithm

  let count = 0,
    candidate = 0;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }
    count += num == candidate ? 1 : -1;
  }
  if (nums.filter((num) => num === candidate).length > nums.length / 2) {
    return candidate;
  }
  return undefined;
};
for (let i = 0; i < testCasesMajority.length; i++) {
  console.log(majorityElement(testCasesMajority[i]));
}
*/
var majorityElement = function (items) {
  // Boyer-Moore Voting Algorithm

  let count = 0,
    candidate = 0;

  for (let item of items) {
    if (count == 0) {
      candidate = item;
    }
    //breakpoints
    //count equals count + 1 if item == candidate or -1 if false
    count += item == candidate ? 1 : -1;
  }
  let candidateCount = 0;
  for (const item of items) {
    if (item === candidate) {
      candidateCount++;
    }
  }
  if (candidateCount > items.length / 2) {
    return candidate;
  }
  return undefined;
};
// for (let i = 0; i < testCasesMajority.length; i++) {
//   console.log(majorityElement(testCasesMajority[i]));
// }

//O(n)time
//hard part O(1)space regardless of the amount of X it always takes the same space
//majority -> exists more than 50% of an array,
//if X is the majority pairs of X and another element we'd be left over with Xs
//function to remove first X and Y ()
//majority being 11 for 20 aka 50% + 1
function findMajority(items) {
  //any cases with 0
  if (items.length === 0) {
    return undefined;
  }
  //this'll have e.g. {egg : 2 , butter : 2}
  let itemCountObject = {};

  //item is the item itself instead of the index like i
  for (const item of items) {
    if (item in itemCountObject) {
      itemCountObject[item]++;
    } else {
      itemCountObject[item] = 1;
    }
  }
  //we check for majority, o7e return u8d
  for (const countKey in itemCountObject) {
    if (itemCountObject[countKey] > items.length / 2) {
      return countKey;
    }
  }
  return undefined;
}
/*
for (let i = 0; i < testCasesMajority.length; i++) {
  console.log(findMajority(testCasesMajority[i]));
}
*/
//worst time possible
function garbage(items) {
  if (items.length === 0) {
    return undefined;
  }

  let itemCount = [];

  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    for (let j = 0; j < itemCount.length; ++j) {
      if (currentItem === itemCount[j][0]) {
        itemCount[j][1] += 1;
      } else if (j + 1 === itemCount.length) {
        itemCount.push([currentItem, 1]);
        break;
      }
    }
  }

  //we check which is the biggest stack
  let maxCount = 0;
  for (const countKey in itemCountObject) {
    if (itemCountObject[countKey] > maxCount) {
      maxCount = itemCountObject[countKey];
    }
  }

  //create the array of answers
  let pluralityArray = [];
  for (const countKey in itemCountObject) {
    if (itemCountObject[countKey] === maxCount) {
      pluralityArray.push(countKey);
    }
  }

  //return array of answers
  return pluralityArray;
}

/*
const testArraySource = [
  "milk",
  "egg",
  "butter",
  "butter",
  "shea butter",
  "egg",
];
let testArray = [];

for (let i = 0; i < 1000; i++) {
  testArray.push(...testArraySource);
}

console.time("firstTime");

for (let i = 0; i < 1000; i++) {
  findPlurality(testArray);
}

console.timeEnd("firstTime");

console.time("secondTime");

for (let i = 0; i < 1000; i++) {
  findPlurality2(testArray);
}

console.timeEnd("secondTime");
*/

/*
console.log(findPlurality(testCases[2]));

let objectTest = {};
objectTest[1] = ["milk"];
objectTest[1].push("butter");
objectTest[1].push("cocoa");
console.log(objectTest[1]);
console.log(objectTest);
*/

export { fizzBuzz, hasDuplicate, findPlurality, findMajority };
