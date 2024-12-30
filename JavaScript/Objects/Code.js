// Objects in Javascript

// Object
const user = {
  name: "Sudir Krishnaa",
  age: 24,
};

// Accessing properties of objects

// Method 1: Dot Operator
console.log(user.name); // 'Sudir Krishnaa'
console.log(user.age); // 24

// Method 2:
console.log(user["name"]); // 'Sudir Krishnaa'
console.log(user["age"]); // 24

// ________________________________________________________________

// Inserstion

console.log("Printing User Object before insertion: ");
console.log(user); // { name: 'Sudir Krishnaa', age: 24 }

// Method 1: Dot Operator
user.gender = "male";
user.loggedIn = true;

// Method 2: Bracket Notation
user["place of birth"] = "India";

console.log("Printing User Object After insertion: ");
console.log(user);
//  {
//     name: 'Sudir Krishnaa',
//     age: 24,
//     gender: 'male',
//     loggedIn: true,
//     'place of birth': 'India'
//   }

// ________________________________________________________________

// DELETION

delete user.loggedIn;
console.log(user);
// {
//     name: 'Sudir Krishnaa',
//     age: 24,
//     gender: 'male',
//     'place of birth': 'India'
//   }

// ________________________________________________________________

// Adding Dynamic Properties

const property = "firstName";
const value = "Sudir";

const userTwo = {
  [property]: value,
};

console.log(userTwo);
// { firstName: 'Sudir' }

// ________________________________________________________________

// Accessing or Looping through an Object

for (key in user) {
  console.log(user[key]);
}

// OUTPUT:
// Sudir Krishnaa
// 24
// male
// India

// ________________________________________________________________
