# Currying in JS

Currying in Javascript can be acheived using two ways

- Currying achieved Using **Bind**
- Currying achieved Using **Closures**

## 1) Currying achieved Using Bind

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

## 2) Currying achieved Using Closures

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
