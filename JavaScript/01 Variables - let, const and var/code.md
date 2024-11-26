# var vs let vs const

## 1. Scope

- var: Function-scoped.
- let and const: Block-scoped.

Example:

```javascript
{
  var x = 5; // Declared with `var`
}
console.log(x); // OUTPUT: 5 (Accessible outside the block because `var` is function-scoped)

{
  let y = 10; // Declared with `let`
}
console.log(y); // OUTPUT: ReferenceError (Not accessible outside the block because `let` is block-scoped)

{
  const z = 15; // Declared with `const`
}
console.log(z); // OUTPUT: ReferenceError (Not accessible outside the block because `const` is block-scoped)
```

## 2. Reassignment and Redeclaration

- var:
  Can be reassigned.
  Can be redeclared in the same scope.

- let:
  Can be reassigned.
  Cannot be redeclared in the same scope.

- const:
  Cannot be reassigned.
  Cannot be redeclared in the same scope.

Example:

```javascript
var a = 10;
var a = 20; // Redeclaration allowed
a = 30; // Reassignment allowed
console.log(a); // OUTPUT: 30

let b = 10;
b = 20; // Reassignment allowed
// let b = 30; // Redeclaration NOT allowed (Uncomment to see error)

const c = 10;
// c = 20;   // Reassignment NOT allowed (Uncomment to see error)
// const c = 30; // Redeclaration NOT allowed (Uncomment to see error)
console.log(c); // OUTPUT: 10
```

## 3. Hoisting

- var: Hoisted with an undefined value.
- let and const: Hoisted but not initialized (temporal dead zone).

Example:

```javascript
console.log(a); // OUTPUT: undefined (Hoisted with `undefined`)
var a = 10;

console.log(b); // OUTPUT: ReferenceError (Accessed before initialization)
// let b = 20;

// console.log(c); // OUTPUT: ReferenceError (Accessed before initialization)
// const c = 30;
```

## 4. Shadowing

Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.

- var can be shadowed by let or const.
- let or const cannot be shadowed by var. Attempting to do so results in Illegal Shadowing.

Example:

```javascript
function shadowExample() {
  let outer = "Outer Value";

  if (true) {
    let outer = "Inner Value"; // This shadows the outer variable
    console.log(outer); // OUTPUT: Inner Value
  }

  console.log(outer); // OUTPUT: Outer Value
}

shadowExample();
```

## Illegal Shadowing:

```javascript
function illegalShadowing() {
  var outerVar = "Hello";
  let innerLet = "Bye";

  if (true) {
    let outerVar = "Hi"; // Valid shadowing
    // var innerLet = "See you"; // Illegal shadowing (Uncomment to see error)
  }
}

illegalShadowing();
```

Error:
SyntaxError: Identifier 'innerLet' has already been declared

## 5. Best Practices

- Use let for variables that will change.
- Use const for variables that won’t change.
- Avoid var to reduce potential scope and hoisting-related bugs.
