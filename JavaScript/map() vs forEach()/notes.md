# `map()` vs `forEach()` in JavaScript

Both `map()` and `forEach()` are used to iterate over arrays, but they have key differences in terms of **use case, functionality, and return value**.

---

### **Key Differences**

| **Feature**      | **`map()`**                                                                                             | **`forEach()`**                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Purpose**      | Used to **transform** an array by returning a new array with modified elements.                         | Used to **perform side effects** (like logging, updating external state) on each element of an array. |
| **Return Value** | Returns a **new array** with the results of calling a provided function on every element.               | Returns `undefined`. Does not create a new array.                                                     |
| **Chaining**     | Can be chained with other array methods like `filter()`, `reduce()`, etc., because it returns an array. | Cannot be chained directly because it does not return anything.                                       |
| **Use Case**     | When you want to derive a new array from the original array.                                            | When you want to perform operations on the array without creating a new array.                        |

---

### **Detailed Explanation**

### **`map()`**

- **What It Does**: Transforms each element of an array and returns a new array.
- **When to Use**: When you need to create a new array with modified elements based on the original array.

**Example:**

```jsx
const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num * num); // [1, 4, 9, 16]

console.log(squares); // Output: [1, 4, 9, 16]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4]
```

### **Chaining Example with `map()`**

Since `map()` returns a new array, you can chain it with other methods:

```jsx
const numbers = [1, 2, 3, 4];
const result = numbers.map((num) => num * 2).filter((num) => num > 4);

console.log(result); // Output: [6, 8]
```

`forEach()` cannot be chained like this because it doesn't return a new array.

---

### **`forEach()`**

- **What It Does**: Iterates over an array and allows you to perform side effects (like logging, updating state).
- **When to Use**: When you need to execute a function for each array element without returning anything.

**Example:**

```jsx
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * num)); // Logs: 1, 4, 9, 16

console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4]
```

---

### **When to Use Each?**

| **Scenario**                                     | **Use `map()`** | **Use `forEach()`** |
| ------------------------------------------------ | --------------- | ------------------- |
| Transforming data (e.g., doubling numbers).      | ✅ Yes          | 🚫 No               |
| Logging array elements to the console.           | 🚫 No           | ✅ Yes              |
| Modifying elements and storing the result.       | ✅ Yes          | 🚫 No               |
| Performing operations without creating an array. | 🚫 No           | ✅ Yes              |

---

---

### **Conclusion**

- Use **`map()`** when you need a new array with transformed elements.
- Use **`forEach()`** when you only need to perform side effects on each array element without returning anything.
