// Filter, Polyfill of Filter

// YT : https://youtu.be/dGq0gi0wv64?si=JLT3A8xAbVGspG3A

let nums = [1, 2, 3, 4, 5];

// SYNTAX:
// const newArray = array.filter(callback(element, index, array[]))
const greaterThanTwo = nums.filter((num, index, nums) => {
  return num > 2;
});

console.log(greaterThanTwo);

// ________________________________________________________________

// Polyfill of Filter

Array.prototype.myFilter = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }

  return res;
};

const greaterThanTwoPolyfill = nums.myFilter((num, index, nums) => {
  return num > 2;
});

console.log(greaterThanTwoPolyfill);

// ________________________________________________________________
