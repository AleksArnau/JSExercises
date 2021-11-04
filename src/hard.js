function fizzBuzz(start, end) {
  const fizzBuzz = [];

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
  const numberTally = {};

  for (const number of numbers) {
    if (number in numberTally) {
      return true;
    }
    numberTally[number] = 1;
  }

  return false;
}

function findPlurality(items) {
  if (items.length === 0) {
    return [];
  }

  // const itemCounter = items.reduce((obj, item) => {
  //   obj[item] = (obj[item] || 0) + 1;
  //   return obj;
  // }, {});

  const itemCounter = {};

  for (let item of items) {
    if (!(item in itemCounter)) {
      itemCounter[item] = 0;
    }
    ++itemCounter[item];
  }

  const maxCount = Math.max(...Object.values(itemCounter));

  return Object.keys(itemCounter).filter(
    (item) => itemCounter[item] === maxCount
  );
}

function findMajority(items) {
  if (items.length === 0) {
    return undefined;
  }

  const itemCounter = {};

  for (const item of items) {
    if (!(item in itemCounter)) {
      itemCounter[item] = 0;
    }
    itemCounter[item]++;
  }

  for (const item in itemCounter) {
    if (itemCounter[item] > items.length / 2) {
      return item;
    }
  }

  return undefined;
}

export { fizzBuzz, hasDuplicate, findPlurality, findMajority };
