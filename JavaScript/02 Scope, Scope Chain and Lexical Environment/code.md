# Scope , Scope Chain and Lexical Environment

## Scope Chain

- The process of going one-by-one from the local memory to the parent's lexical environment and cheking for the values in scope is called **Scope Chain** or Lexical Environment Chain.

## Lexical Environment

- Whenever the Execution Context is created , it creates a Lexical Environment along with it.
- Lexical Environment = **Local Memory + Lexical Environment of the Parent**
- Lexical Environment is the local memory along with the Lexical Environment of the Parent.

## Scope

In JavaScript, "scope" refers to the context or environment in which variables, functions, and objects are declared and accessed. It determines the visibility and lifetime of these identifiers within your code. Understanding scope is crucial for managing variable access and avoiding naming conflicts in JavaScript programs.

There are two primary types of scope in JavaScript:

1. **Global Scope:**

   - Variables declared in the global scope are accessible from anywhere in your JavaScript code, including within functions.
   - Global variables are typically declared outside of any function or block.
   - They have the widest scope and are accessible throughout the entire program.
   - However, overusing global variables can lead to naming conflicts and make code harder to maintain.

   Example:

   ```javascript
   // Global variable
   const globalVar = "I'm global";

   function foo() {
     console.log(globalVar); // Accessible inside functions
   }

   console.log(globalVar); // Accessible outside functions
   ```

2. **Local (Function) Scope:**

   - Variables declared within a function have local scope, meaning they are only accessible within that function.
   - Local variables are declared using `var`, `let`, or `const` within a function.
   - They are not visible outside of the function in which they are defined.
   - Each function creates its own scope, so variables with the same name in different functions are independent and do not conflict.

   Example:

   ```javascript
   function greet() {
     // Local variable
     const message = "Hello, world!";
     console.log(message); // Accessible inside the function
   }

   greet();

   console.log(message); // Error: 'message' is not defined outside the function
   ```

**Block Scope (ES6):**

- With the introduction of ECMAScript 6 (ES6), `let` and `const` variables introduced block scope.
- Block scope means that variables declared with `let` and `const` are limited to the block in which they are defined, such as within loops or conditional statements.
- Unlike `var`, block-scoped variables do not "hoist" to the top of their containing function or global scope.

Example:

```javascript
if (true) {
  // Block-scoped variable
  let blockVar = "I'm block-scoped";
  console.log(blockVar); // Accessible within the block
}

console.log(blockVar); // Error: 'blockVar' is not defined outside the block
```

Understanding scope is crucial for writing clean and maintainable JavaScript code. Properly managing variable scope helps prevent unintended side effects and naming conflicts in your programs.
