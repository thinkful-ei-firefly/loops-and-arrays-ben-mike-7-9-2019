/* eslint-disable no-console */
//min / max with a while loop

'use strict';

let arr = [-9000, -2, -3, -1000, -4, -5, -6, -100];

function max(numbers) {
  let i = 0;
  let container = numbers[0];
  if (numbers.length === 0) {
    return undefined;
  }
  while(i < numbers.length) {
    if (numbers[i] > container) {
      container = numbers[i];
    }
    i++;
  }
  return container;
}

console.log(max(arr));


function min(numbers) {
  let i = 0;
  let container = numbers[0];
  if (numbers.length === 0) {
    return undefined;
  }
  while(i < numbers.length) {
    if (numbers[i] < container) {
      container = numbers[i];
    }
    i++;
  }
  return container;
}

console.log(min(arr));



//compute the average with for each
//pseudo
/*
1 sum all numbers
  add each element of array to a defined variable using for each
2 divide by number of things

*/
let arr2 = [2, 4, 6];

function average(numbers) {
  let sum = 0;
  numbers.forEach(function(elem) {
    sum += elem;
  });
  return sum / numbers.length;
}

console.log(average(arr2));

// HIGHER ORDER FUNCTIONS
function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
repeat(hello, 5);
repeat(goodbye, 5);

// HIGHER ORDER FUNCTIONS 2

function filter(arr, fn) {
  // TASK: Define your function here
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// hazard alert

function hazardWarningCreator(typeofWarning) {
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    let time = 'times';
    if (warningCounter === 1) {
      time = 'time';
    }
    console.log(`DANGER! There is a ${typeofWarning} hazard at ${location}`);
    console.log(`The ${typeofWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
  };
}

const zombieWarning = hazardWarningCreator('zombie mob');
const tornadoWarning = hazardWarningCreator('spooky tornado');
const cicadaWarning = hazardWarningCreator('apocalyptic mob of bugs');

zombieWarning('Brain St.');
zombieWarning('Some St.');
zombieWarning('Another St.');
tornadoWarning('Windy Way');
cicadaWarning('Bug Boulevard');

// turtle movements

let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filteredMoves = turtleMoves.filter(steps => steps.every(step => step >= 0));

console.log(JSON.stringify(filteredMoves));