// Output Based Interview Questions
// REF: RSC $ Course

// Question 1: Guess the Output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);

// Ans: { a: 'three', b: 'two' }

// Note: two properties with same name `a` are defined

// ________________________________________________________________

// Question 2:
// Create a function multiplyByTwo(obj) that multiplies
// all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

// Ans:
const multipleByTwo = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

multipleByTwo(nums);

console.log(nums);

// OUTPUT:
// { a: 200, b: 400, title: 'My nums' }

//________________________________________________________________
