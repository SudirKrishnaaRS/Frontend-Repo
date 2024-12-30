# Objects in JavaScript: Interview Notes

#### Definition

Objects in JavaScript are collections of key-value pairs. Keys are strings (or Symbols), and values can be of any type, including other objects, functions, or primitives.

---

### Key Characteristics of Objects

1. **Dynamic Structure**: Properties can be added or removed at runtime.
2. **Reference Type**: Objects are mutable and stored as references.
3. **Prototypal Inheritance**: Objects can inherit from other objects via the prototype chain.

---

### Creating Objects

| **Method**             | **Syntax**             | **Example**                                                |
| ---------------------- | ---------------------- | ---------------------------------------------------------- |
| **Object Literal**     | `{ key: value }`       | `const obj = { name: "Alice", age: 25 };`                  |
| **Object Constructor** | `new Object()`         | `const obj = new Object(); obj.name = "Bob";`              |
| **Object.create()**    | `Object.create(proto)` | `const obj = Object.create(null);`                         |
| **Class Syntax**       | `class MyClass {}`     | `class Person { constructor(name) { this.name = name; } }` |

---

### Accessing and Modifying Properties

| **Method**            | **Syntax**               | **Example**       |
| --------------------- | ------------------------ | ----------------- |
| **Dot Notation**      | `object.property`        | `obj.name`        |
| **Bracket Notation**  | `object["property"]`     | `obj["name"]`     |
| **Adding Property**   | `object.newProp = value` | `obj.age = 30;`   |
| **Deleting Property** | `delete object.property` | `delete obj.age;` |

---

### Useful Object Methods

| **Method**                   | **Description**                                              | **Example**                                   |
| ---------------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| `Object.keys(obj)`           | Returns an array of the object's keys.                       | `Object.keys(obj); // ["name", "age"]`        |
| `Object.values(obj)`         | Returns an array of the object's values.                     | `Object.values(obj); // ["Alice", 25]`        |
| `Object.entries(obj)`        | Returns an array of key-value pairs.                         | `Object.entries(obj); // [["name", "Alice"]]` |
| `Object.assign(target, src)` | Copies properties from source to target.                     | `Object.assign({}, obj);`                     |
| `Object.freeze(obj)`         | Makes the object immutable.                                  | `Object.freeze(obj);`                         |
| `Object.seal(obj)`           | Prevents adding/removing properties but allows modification. | `Object.seal(obj);`                           |
| `Object.create(proto)`       | Creates an object with the specified prototype.              | `Object.create(obj);`                         |

---

### Interview Questions

1. **What is the difference between `Object.freeze()` and `Object.seal()`?**

   - `Object.freeze()` prevents modification, addition, and deletion of properties.
   - `Object.seal()` allows modification but prevents addition and deletion.

2. **How are objects passed in JavaScript—by value or by reference?**

   - Objects are passed by reference, meaning changes to an object in one variable affect all references to it.

3. **What is prototypal inheritance?**

   - Prototypal inheritance allows an object to inherit properties and methods from another object via its prototype.

4. **How do you merge two objects?**

   - Using `Object.assign()` or the spread operator (`...`):
     ```javascript
     const merged = { ...obj1, ...obj2 };
     ```

5. **How do you check if an object has a specific property?**
   - Use the `in` operator or `Object.hasOwnProperty()`:
     ```javascript
     "name" in obj;
     obj.hasOwnProperty("name");
     ```

---
