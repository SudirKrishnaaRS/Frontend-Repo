// Map, Polyfill of Map

// YT : https://youtu.be/dGq0gi0wv64?si=JLT3A8xAbVGspG3A

let nums = [1, 2, 3, 4, 5];

// SYNTAX:
// const newArray = array.map(callback(element, index, array[]))
let doubleNums = nums.map((num, index, nums) => {
  return num * 2;
});

console.log(doubleNums);

// ________________________________________________________________

// Polyfill of Map
Array.prototype.myMap = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }

  return res;
};

const doubleNumsPolyfill = nums.myMap((num, ind, nums) => {
  return num * 2;
});

console.log(doubleNumsPolyfill);
// ________________________________________________________________
