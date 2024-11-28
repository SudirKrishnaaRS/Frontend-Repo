# Callback, Callback Hell and Inversion of Control

## YT : https://youtu.be/yEKtJGha3yM?si=SuqLHxRJTZgMH4pU

## Callback

A **callback function** is a function passed as an argument to another function, which is then executed (called back) after the completion of that function.

---

### **1. Why Use Callback Functions?**

- They help ensure that code executes **asynchronously**, such as after a task completes (e.g., an API call).

### **2. Syntax**

#### General Structure:

```javascript
function mainFunction(callback) {
  // Some code
  callback(); // Execute the callback function
}
```

#### Example:

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const userName = "Alice";
  callback(userName);
}

processUserInput(greet);
// OUTPUT: Hello, Alice`
```

## Examples of Callbacks in Synchronous and Async

**1. Synchronous Callback**

A callback executed immediately during the function execution is called a **synchronous callback**.

#### Example:

```javascript
function calculateSum(a, b, callback) {
  const sum = a + b;
  callback(sum); // Call the callback function with the result
}

function printResult(result) {
  console.log(`The sum is: ${result}`);
}

calculateSum(5, 10, printResult);
// OUTPUT: The sum is: 15`
```

---

**2. Asynchronous Callback**

A callback executed after some asynchronous operation is called an **asynchronous callback**.

#### Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
// OUTPUT:
// Data fetched!
// Processing data...
```

---

**3. Anonymous Callback Functions**

You can use an **anonymous function** as a callback instead of a named function.

#### Example:

```javascript
setTimeout(() => {
  console.log("This is an anonymous callback.");
}, 1000);
// OUTPUT (after 1 second): This is an anonymous callback.
```

---

## **2.Callback Hell (Nested Callbacks)**

When multiple callbacks are nested, the code becomes hard to read and maintain. This is known as **callback hell**.

Also causes **Inversion of control** is like that you lose the control of code when we are using callback.

#### Example:

```javascript
setTimeout(() => {
  console.log("Step 1: Start");
  setTimeout(() => {
    console.log("Step 2: Process");
    setTimeout(() => {
      console.log("Step 3: Finish");
    }, 1000);
  }, 1000);
}, 1000);
// OUTPUT (delayed in steps):
// Step 1: Start
// Step 2: Process
// Step 3: Finish
```

---

### **3. Avoiding Callback Hell**

Use modern alternatives like **Promises** and **async/await** to simplify code.

#### Example with Promises:

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data fetched!");
      resolve();
    }, 2000);
  });
}

fetchData().then(() => {
  console.log("Processing data...");
});
// OUTPUT:
// Data fetched!
// Processing data...
```

---

### **4. Gotchas and Best Practices**

1.  **Ensure the Callback is a Function**: Always check if the callback is valid to avoid errors.

```javascript
function doSomething(callback) {
  if (typeof callback === "function") {
    callback();
  } else {
    console.error("Callback is not a function!");
  }
}
```

2.  **Avoid Deep Nesting**: Refactor nested callbacks using **Promises** or **async/await**.
3.  **Use Descriptive Names**: Name your callback functions meaningfully to improve readability.
4.  **Error Handling**: Provide error-handling capabilities in asynchronous callbacks.

    #### Example:

```javascript
function fetchData(callback, errorCallback) {
  const success = false; // Simulating failure
  setTimeout(() => {
    if (success) {
      callback("Data fetched!");
    } else {
      errorCallback("Failed to fetch data.");
    }
  }, 1000);
}

fetchData(
  (message) => console.log(message),
  (error) => console.error(error)
);
// OUTPUT: Failed to fetch data.
```
