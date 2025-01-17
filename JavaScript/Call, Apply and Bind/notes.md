# **Call, Apply, and Bind**

These are methods available on JavaScript functions that allow you to **control the `this` context** when calling a function.

---

### **1. `call()`**

- **Purpose**: Calls a function with a specified `this` context and arguments passed individually.
- **Syntax**: `func.call(thisArg, arg1, arg2, ...)`
- **Use Case**: When you want to invoke a function immediately and specify its `this`.

### **Example**:

```jsx
let nameObj = {
  firstname: "Sudir",
  lastname: "Krishnaa",
};

function printName(greeting, regards) {
  console.log(
    `${greeting}, I am ${this.firstname} ${this.lastname}. ${regards}`
  );
}

printName.call(nameObj, "Namaste", "Bye");
// Output: Namaste, I am Sudir Krishnaa. Bye
```

---

### **2. `apply()`**

- **Purpose**: Similar to `call()`, but arguments are passed as an array.
- **Syntax**: `func.apply(thisArg, [arg1, arg2, ...])`
- **Use Case**: Useful when arguments are already in an array or iterable format.

### **Example**:

```jsx
printName.apply(nameObj, ["Namaste", "Bye"]);
// Output: Namaste, I am Sudir Krishnaa. Bye
```

---

### **3. `bind()`**

- **Purpose**: Returns a new function with the specified `this` context and optionally pre-filled arguments, without calling it immediately.
- **Syntax**: `func.bind(thisArg, arg1, arg2, ...)`
- **Use Case**: When you want to create a reusable function with a specific `this`.

### **Example**:

```jsx
let person1 = printName.bind(nameObj);
person1("Namaste", "Bye");
// Output: Namaste, I am Sudir Krishnaa. Bye
```

---

### **Differences Between `call()`, `apply()`, and `bind()`**

| Feature          | `call()`                     | `apply()`                    | `bind()`                     |
| ---------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| **Execution**    | Executes immediately         | Executes immediately         | Does not execute immediately |
| **Arguments**    | Passed individually          | Passed as an array           | Pre-filled optionally        |
| **Return Value** | Return value of the function | Return value of the function | A new bound function         |

---

### **In Summary**

- Use **`call()`** to invoke a function immediately with arguments passed one by one.
- Use **`apply()`** to invoke a function immediately with arguments passed as an array.
- Use **`bind()`** to create a new function with `this` bound to a specific value for later use.
