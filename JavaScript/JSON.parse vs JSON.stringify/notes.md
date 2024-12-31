# Difference b/w JSON.stringify and JSON.parse

The main difference is

- **JSON.stringify** : Converts an Object into a String
- **JSON.parse** : Converts a String into an Object

## Most Common Usecase

Useful to store in local storage

- Stored as string using JSON.stringify
- Retrieved and converted back to object using JSON.parse

### Example

```javascript
const user = {
  name: "Sudir",
  age: 25,
};

const stringifiedObj = JSON.stringify(user);
localStorage.setItem("test", stringifiedObj);
console.log(stringifiedObj); // {"name":"Sudir","age":25}

const obj2 = JSON.parse(localStorage.getItem("test"));
console.log(obj2); // { name: 'Sudir', age: 25 }
```
