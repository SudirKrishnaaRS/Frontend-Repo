# Currying in JS

> Reference Vid: [Click here](https://youtu.be/vQcCNpuaJO8?si=9HuaJKA_OtjfSBPJ)

> Reference Blog: [Click here](https://builtin.com/software-engineering-perspectives/currying-javascript#:~:text=Currying%20in%20JavaScript%20transforms%20a,1)

- Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument.
- Simple example:

```javascript
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6
```

- Uses:
  - Currying helps you avoid passing the same variable again and again.
  - It helps to create a higher-order function.

- Currying in JavaScript can be achieved using two ways: (refer Video)
  - Currying achieved using **Closures**
  - Currying achieved using **Bind**

## 1) Currying achieved Using Closures

```javascript
function multiply(x) {
  return (y) => {
    return x * y;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); // OUTPUT: 6

const multiplyByThree = multiply(3);
console.log(multiplyByThree(3)); // OUTPUT: 9
```

## 2) Currying achieved Using Bind

```javascript
function multiply(x, y) {
  return x * y;
}

// Using Bind
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3)); // OUTPUT: 6

const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(3)); // OUTPUT: 9
```
