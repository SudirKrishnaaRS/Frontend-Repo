# Operators in JavaScript

JavaScript operators are symbols or keywords used to perform operations on values or variables. These can be classified into various categories:

## 1. Type Operators

## 2. Nullish Coalescing Operator (`??`)

Returns the right-hand value if the left-hand value is null or undefined.

**Example:**

## 3. Optional Chaining Operator (`?.`)

Safely access deeply nested properties without throwing errors if a property doesn’t exist.

## 4. Unary Operators

## 5. Spread and Rest Operators

- Spread (...): Expands an array or object.
  **Example:**

```javascript
// Spread
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // OUTPUT: [1, 2, 3, 4, 5]
```

- Rest (...): Collects arguments into an array.

```javascript
// Rest
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // OUTPUT: 6
```

---

## Basic Operators

## 1. Arithmetic Operators

Used to perform basic mathematical operations.

## 2. Assignment Operators

Used to assign values to variables.

## 3. Comparison Operators

Used to compare two values and return a boolean (true or false).

## 4. Logical Operators

Used to combine multiple boolean expressions.

## 5. Bitwise Operators

Operate on binary representations of numbers.
