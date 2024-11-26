# If Statements

**If statements** are conditional statements used to execute a block of code only if a specified condition evaluates to `true`.

---

### **Syntax**

```javascript
if (condition) {
  // Code to execute if the condition is true
}
```

---

### **1. Basic If Statement**

The simplest form checks a condition and executes code if the condition is `true`.

#### Example:

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
// OUTPUT: "You are eligible to vote."
```

---

### **2. If-Else Statement**

Provides an alternate block of code to execute if the condition is `false`.

#### Syntax:

```javascript
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

#### Example:

```javascript
let age = 16;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
// OUTPUT: "You are not eligible to vote."`
```

---

### **3. If-Else If-Else Statement**

Used to check multiple conditions.

#### Syntax:

```javascript


`if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if none of the conditions are true
}
```

#### Example:

```javascript
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// OUTPUT: "Grade: C"
```

---

### **4. Nested If Statements**

If statements can be nested to create complex decision-making structures.

#### Example:

```javascript
let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Access granted.");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("User not recognized.");
}
// OUTPUT: "Access granted."
```

---

### **5. Ternary Operator**

A shorthand version of an `if-else` statement.

#### Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

#### Example:

```javascript
let age = 18;
let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(result);
// OUTPUT: "Eligible to vote"
```

---

### **6. Logical Operators in If Statements**

You can combine multiple conditions using logical operators.

#### Example:

```javascript
let age = 20;
let hasVoterID = true;

if (age >= 18 && hasVoterID) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}
// OUTPUT: "You can vote."
```

---

### **7. Gotchas and Best Practices**

- **Condition Type Coercion**: Conditions are coerced to boolean. Non-boolean values like `0`, `null`, `undefined`, or `""` are treated as `false`. Other values are `true`.

  #### Example:

  ```javascript
  if (0) {
    console.log("This will not run.");
  } else {
    console.log("This will run.");
  }
  // OUTPUT: "This will run."
  ```

- **Avoid Deep Nesting**: Deeply nested `if` statements can be hard to read. Use functions or switch statements when necessary.
- **Readable Conditions**: Use clear and readable conditions to make your code easier to understand.

---

### **8. Summary**

![image](https://github.com/user-attachments/assets/c2d213b9-bc75-437b-b18a-252d75d2c3de)

