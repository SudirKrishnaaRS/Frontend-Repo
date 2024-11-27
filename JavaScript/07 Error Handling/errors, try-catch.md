# Errors, Error Handling(try-catch)

Error handling ensures that your application can gracefully manage runtime errors, improving user experience and debugging efficiency.

---

### **1. Types of Errors in JavaScript**

1. **Syntax Errors**: Occur due to incorrect code syntax.

   - **Example**: `console.log("Hello;`
   - Fix: Correct the syntax, e.g., `console.log("Hello");`

2. **Runtime Errors**: Occur during execution when the code attempts an operation it cannot perform.

   - **Example**: `let x = y + 1; // y is not defined`

3. **Logical Errors**: Occur due to flaws in the program logic, causing incorrect behavior without throwing explicit errors.

   - **Example**: Writing `if (x = 10)` instead of `if (x === 10)`.

---

### **2. Handling Errors with Try-Catch**

The `try...catch` block is used to handle errors gracefully.

#### Syntax

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}
```

#### Example

```javascript
try {
  let result = 10 / 0; // Dividing by zero (valid in JS, but may be logical error)
  console.log(result);
  nonExistentFunction(); // Throws an error
} catch (error) {
  console.log("An error occurred:", error.message);
}
// OUTPUT: "An error occurred: nonExistentFunction is not defined"
```

---

### **3. Finally Block**

The `finally` block is used to execute code regardless of whether an error occurs or not.

#### Syntax

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run
}
```

#### Example

```javascript
try {
  console.log("Start");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This will always execute.");
}
// OUTPUT:
// Start
// Caught an error: Something went wrong!
// This will always execute.
```

---

### **4. Throwing Custom Errors**

You can explicitly throw errors using the `throw` statement.

#### Example

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  console.log("Access granted.");
}

try {
  checkAge(16);
} catch (error) {
  console.log(error.message);
}
// OUTPUT: "You must be 18 or older."
```

---

### **5. Error Object**

The `Error` object provides details about the error.

#### Properties

- `name`: Name of the error (e.g., `ReferenceError`, `TypeError`).
- `message`: A description of the error.
- `stack`: Stack trace showing where the error occurred.

#### Example

```javascript
try {
  throw new Error("Custom error message");
} catch (error) {
  console.log("Name:", error.name); // OUTPUT: Name: Error
  console.log("Message:", error.message); // OUTPUT: Message: Custom error message
  console.log("Stack:", error.stack); // Stack trace
}
```

---

### **6. Common Error Types**

---

### **7. Best Practices for Error Handling**

1. **Use Specific Catch Blocks**: Catch specific errors where possible.

- **Example**:

```javascript
try {
  nonExistentFunction();
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Handle ReferenceError.");
  } else {
    console.log("Handle other errors.");
  }
}
```

2. **Avoid Catching All Errors Globally**: Don't suppress all errors; it can hide issues.
3. **Log Errors**: Use proper logging to help with debugging.
4. **Throw Meaningful Errors**: Provide clear messages when throwing custom errors.
5. **Use Graceful Fallbacks**: Provide alternate functionality or a user-friendly message when errors occur.

---

### **8. Summary Table**
