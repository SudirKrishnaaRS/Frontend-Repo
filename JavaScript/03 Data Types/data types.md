# Data Types in JavaScript

JavaScript has two categories of data types:

1. Primitive Data Types
2. Non-Primitive Data Types (Objects)

## 1. Primitive Data Types

Primitive types represent a single value and are immutable (cannot be changed).

![image](https://github.com/user-attachments/assets/4f2755b0-26a4-43ad-abdf-6321c7682136)


**Examples:**

```javascript
let str = "JavaScript"; // string
let num = 42; // number
let bigInt = 12345678901234567890n; // bigint
let isAvailable = true; // boolean
let noValue; // undefined
let empty = null; // null
let uniqueKey = Symbol("key"); // symbol
```

## 2. Non-Primitive Data Types (Objects)

Objects in JavaScript are collections of key-value pairs and can store multiple data types.

![image](https://github.com/user-attachments/assets/9e06db96-0ef5-4b27-a312-cf179967c07e)


**Examples:**

```javascript
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3]; // Array
let greet = function () {
  console.log("Hi");
}; // Function
let now = new Date(); // Date
let regex = /abc/; // Regular Expression
let map = new Map(); // Map
let set = new Set([1, 2, 3]); // Set
```

## 3. Type Checking

Use the typeof operator to determine the type of a variable.

**Example:**

```javascript
console.log(typeof "Hello"); // OUTPUT: string
console.log(typeof 42); // OUTPUT: number
console.log(typeof true); // OUTPUT: boolean
console.log(typeof undefined); // OUTPUT: undefined
console.log(typeof null); // OUTPUT: object (this is a known JavaScript quirk)
console.log(typeof Symbol()); // OUTPUT: symbol
console.log(typeof { key: "value" }); // OUTPUT: object
console.log(typeof [1, 2, 3]); // OUTPUT: object (arrays are objects in JS)
console.log(typeof function () {}); // OUTPUT: function
```

## 4. Special Cases

a) `null` vs `undefined`:

- null: Explicitly set to indicate no value.
- undefined: Automatically assigned to uninitialized variables.

b) NaN (Not-a-Number):

- A special number type that represents an invalid number result.
- Example:

```javascript
console.log(0 / 0); // OUTPUT: NaN
console.log(typeof NaN); // OUTPUT: number
```

## 5. Type Conversion

**Implicit Conversion (Type Coercion):**
JavaScript automatically converts one data type to another.

```javascript
console.log("5" + 2); // OUTPUT: "52" (number 2 is coerced to string)
console.log("5" - 2); // OUTPUT: 3 (string "5" is coerced to number)
```

**Explicit Conversion:**
Use built-in methods like String(), Number(), Boolean() for manual type conversion.

```javascript
console.log(Number("42")); // OUTPUT: 42
console.log(String(42)); // OUTPUT: "42"
console.log(Boolean(0)); // OUTPUT: false
```

## Summary

![image](https://github.com/user-attachments/assets/1bcb0b4a-efc3-4994-ab11-a59bfe7530cb)

![image](https://github.com/user-attachments/assets/03f31cf4-007c-4a39-9f39-7d74134ba6bf)


