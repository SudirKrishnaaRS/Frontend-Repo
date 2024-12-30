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

// Object Methods:

// 1. Object.keys(obj)
// Returns an array of the object's keys.
const res1 = Object.keys(user);
console.log(res1);

// OUTPUT:
// [ 'name', 'age', 'gender', 'place of birth' ]

// _________________________________

// 2. Object.values(obj)
// Returns an array of the object's values.
const res2 = Object.values(user);
console.log(res2);

// OUTPUT:
// [ 'Sudir Krishnaa', 24, 'male', 'India' ]

// _________________________________

// 3. Object.entries(obj)

const res3 = Object.entries(user);
console.log(res3);

// OUTPUT:
// [
//     [ 'name', 'Sudir Krishnaa' ],
//     [ 'age', 24 ],
//     [ 'gender', 'male' ],
//     [ 'place of birth', 'India' ]
//  ]

// _________________________________

// 4. Object.assign(target, src)
// Copies properties from source to target.

let copy1 = {};
Object.assign(copy1, user);
console.log(copy1);

// OUTPUT:
// {
//     name: 'Sudir Krishnaa',
//     age: 24,
//     gender: 'male',
//     'place of birth': 'India'
//  }

// _________________________________

// 5. Object.freeze(obj)
// Makes the object immutable.

// _________________________________

// 6. Object.seal(obj)
// Prevents adding/removing properties but allows modification.

// _________________________________

// 7. Object.create(proto)
// Creates an object with the specified prototype.

// ___________________________________________________________________
