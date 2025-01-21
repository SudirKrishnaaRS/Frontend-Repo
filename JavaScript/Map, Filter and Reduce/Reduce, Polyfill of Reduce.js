// Reduce, Polyfill of Reduce

// YT : https://youtu.be/dGq0gi0wv64?si=JLT3A8xAbVGspG3A

let nums = [1, 2, 3, 4];

// SYNTAX: const newArray = array.reduce((accumulator, current, index,array) => {}, initialValue)
const sum = nums.reduce((acc, curr, index, array) => {
  return acc + curr;
}, 0);

console.log(sum);

// ________________________________________________________________

// Polyfill of Reduce

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    // If initialValue is not provided the arr[0] is taken as InitialValue
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[0];
  }

  return accumulator;
};

const sumPolyfill = nums.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sumPolyfill);

// ________________________________________________________________
