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