# Closure

A function along with it's Lexical Scope(surrounding scope) bundeled together forms a Closure.

```javascript
function outer() {
  var a = 10;
  return function inner() {
    console.log(a);
  };
}

let res = outer();
res();
```

> OUTPUT: 10
