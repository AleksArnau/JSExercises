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

function hasDuplicate(numbers) {
  let numberTally = {};

  for (const number of numbers) {
    if (number in numberTally) {
      return true;
    } else {
      numberTally[number] = 1;
    }
  }

  return false;
}

function findPlurality(items) {
  if (items.length === 0) {
    return undefined;
  }

  let itemCounter = {};

  for (let i = 0; i < items.length; i++) {
    if (items[i] in itemCounter) {
      itemCounter[items[i]]++;
    } else {
      itemCounter[items[i]] = 1;
    }
  }

  let maxCount = 0;

  for (const item in itemCounter) {
    if (itemCounter[item] > maxCount) {
      maxCount = itemCounter[item];
    }
  }

  let pluralityList = [];

  for (const item in itemCounter) {
    if (itemCounter[item] === maxCount) {
      pluralityList.push(item);
    }
  }

  return pluralityList;
}

function findMajority(items) {
  if (items.length === 0) {
    return [];
  }

  let itemCounter = {};

  for (const item of items) {
    if (item in itemCounter) {
      itemCounter[item]++;
    } else {
      itemCounter[item] = 1;
    }
  }

  for (const item in itemCounter) {
    if (itemCounter[item] > items.length / 2) {
      return item;
    }
  }

  return undefined;
}

export { fizzBuzz, hasDuplicate, findPlurality, findMajority };
