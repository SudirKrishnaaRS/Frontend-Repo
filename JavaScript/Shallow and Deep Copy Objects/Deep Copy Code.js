// How to Deep Copy / Clone an Object?

let user1 = {
  name: "Sudir",
  age: 24,
};

// Ans:
// 3 Most popular ways to Deep Copy:

// === 1. Using Object.assign() ===
const objClone = Object.assign({}, user1);
user1.name = "Krish";
console.log(user1, objClone);

// OUTPUT:
// [
//   { name: "Krish", age: 24 },
//   { name: "Sudir", age: 24 },
// ];

// _____________________________

// === 2. Using JSON.stringify() and JSON.parse() ===
let user2 = {
  name: "Sudir",
  age: 24,
};

const objClone2 = JSON.parse(JSON.stringify(user2));
user2.name = "Krish";

console.log(user2, objClone2);

// OUTPUT:
// [
//   { name: "Krish", age: 24 },
//   { name: "Sudir", age: 24 },
// ];

// _____________________________

// === 2. Using JSON.stringify() and JSON.parse() ===
let user3 = {
  name: "Sudir",
  age: 24,
};

const objClone5 = { ...user3 };
user3.name = "Krish";

console.log(user3, objClone5);

// OUTPUT:
// [
//   { name: "Krish", age: 24 },
//   { name: "Sudir", age: 24 },
// ];

//________________________________________________________________
