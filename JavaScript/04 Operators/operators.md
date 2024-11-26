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

## 6. Ternary Operator

Short-hand for if-else.

**Syntax:**
```javascript
condition ? valueIfTrue : valueIfFalse;
```
**Example:**

```javascript
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // OUTPUT: "Adult"
```
---

## Basic Operators

## 1. Arithmetic Operators

Used to perform basic mathematical operations.

![image](https://github.com/user-attachments/assets/6b113530-7174-4beb-bf1c-0070aea8baeb)


## 2. Assignment Operators

Used to assign values to variables.

![image](https://github.com/user-attachments/assets/28bd2813-2d1f-454a-9d50-2a7ba23a199b)


## 3. Comparison Operators

Used to compare two values and return a boolean (true or false).

![image](https://github.com/user-attachments/assets/5953761d-ea2b-42fa-8704-3cfdcf5a9ed7)


## 4. Logical Operators

Used to combine multiple boolean expressions.

![image](https://github.com/user-attachments/assets/4778d979-297a-4b4f-a8d5-ce923788d980)


## 5. Bitwise Operators

Operate on binary representations of numbers.

![image](https://github.com/user-attachments/assets/cf330f65-9763-4403-9452-73c17eb86f91)

