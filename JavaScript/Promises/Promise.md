# Promises

## Definition

Promise object represents an eventual completion or
failure of an asynchronous operation

> Promise objects are immutable

## Promise States

1. `Pending`: initial state (neither fulfilled or rejected)
2. `Fulfilled`: meaning the operation was successful
3. `Rejected`: means the operation failed

## Creating a Promise

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Gimmicking a Async Operation (using setTimeout)
    setTimeout(() => {
      // Change the below variable to `true` if the promise needs to "resolved" or `false` if to be "rejected"
      const status = false;
      if (status) {
        resolve("Fetched successfully");
      } else {
        reject("Fetch failed");
      }
    }, 5000);
  });
};
```

## Consuming the Promise

```javascript
const result = fetchData()
  .then((data) => {
    // Executed when the promise is fulfilled
    console.log(data);
  })
  .catch((err) => {
    // Executed when the promise is rejected
    console.log(err);
  });
```
