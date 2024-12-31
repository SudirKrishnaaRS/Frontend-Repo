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

// === IMPORTANT & REPEATED Question ===
// Question 3: Guess the Output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a);

// OUTPUT: 456

// NOTE: when you assign an object as a key thenit will
// be treated as :
// a[b] = 123 -> means { '[object Object]': 123 }
// Then next line is
// a[c] = 456 -> { '[object Object]': 456 }
// So the final output is : { '[object Object]': 456 }

//________________________________________________________________

// Question 4: Difference between JSON.stringify
// and JSON.parse

// Ans: The main difference is:
// - JSON.stringify :  Converts an Object into a String
// - JSON.parse : Converts a String into an Object

// Most Common Usecase:
// Useful to store in local storage
// Stored as string using JSON.stringify
//  Retrieved and converted back to object using JSON.parse

// Example:
const user = {
  name: "Sudir",
  age: 25,
};

const stringifiedObj = JSON.stringify(user);
console.log(stringifiedObj); // {"name":"Sudir","age":25}

const obj2 = JSON.parse(stringifiedObj);
console.log(obj2); // { name: 'Sudir', age: 25 }

//________________________________________________________________

// Question 5: Guess the Output

console.log([..."Sudir"]);

// Ans: [ 'S', 'u', 'd', 'i', 'r' ]

//________________________________________________________________

// Question 6: Guess the Output

const user2 = { name: "Sudir", age: 25 };
const admin = { admin: true, ...user2 };

console.log(admin);

// Ans: { admin: true, name: 'Sudir', age: 25 }

//________________________________________________________________

// Question 7: Guess the Output

const c1 = { greeting: "Hey" };
const d1 = c1;

d1.greeting = "Hello";
console.log(c1);

// Ans: { greeting: 'Hello' }
// NOTE: Here it is by reference
//________________________________________________________________

// Question 8: Guess the Output

console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

// Ans:
// false
// false

// NOTE: Both objects are stored in a different memory space so they are not equal
//________________________________________________________________
