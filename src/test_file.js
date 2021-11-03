function fizzBuzz(start, end) {
  let fizzBuzz = [];
  for (let i = start; i < end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
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

// let testArray = [10, 34];
// testArray.push(54);
// console.log(testArray);

// let testString = "start";
// testString+= 10;
// comsole.log(testString);

//diff instances of the same object aren't the same
//use deep equality .toStrictEqual in Jest
//it's complicated in normal code
//one way is to wrap in a string using JSON.stringify()
let testObject = { testKey: [] };
let testObject2 = { testKey: [] };

console.log(JSON.stringify(testObject) === JSON.stringify(testObject2));
console.log(testObject === testObject2);

export { fizzBuzz };
