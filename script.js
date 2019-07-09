//min / max with a while loop

'use strict';

let arr = [-9000, -2, -3, -1000, -4, -5, -6, -100];

function max(numbers) {
  let i = 0
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
  let i = 0
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