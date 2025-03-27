# Data Hidding and Encapsulation using Closures

Data Hidding and Encapsulation can be achieved using Closures, here's a simple example

```javascript
function Counter() {
  var count = 0;

  this.incrementCounter = () => {
    count++;
  };

  this.decrementCounter = () => {
    count--;
  };

  this.printCounter = () => {
    console.log("count:", count);
  };
}

const counter1 = new Counter(); // We use `new` here as it's a constructor function
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.printCounter(); // OUTPUT: count: 3
counter1.decrementCounter();
counter1.printCounter(); // OUTPUT: count: 2
```

> OUTPUT:
> count: 3
> count: 2
