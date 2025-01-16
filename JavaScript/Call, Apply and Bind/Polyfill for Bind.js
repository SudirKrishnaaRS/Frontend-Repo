// Polyfill for Bind
// Ref: Just 4mins https://youtu.be/VkmUOktYDAU?si=rrU2s_54r4YTU-Ft&t=1698

// Example:
// Object
let car1 = {
  brand: "Ferrari",
  color: "Russo Red",
};

// Function
function purchaseCar(firstName, lastName) {
  console.log(
    `Thanks for purchasing ${this.brand} - ${this.color}. Have a safe journey ${firstName} ${lastName} !`
  );
}

// const purchaseFerrari = purchaseCar.bind(car1);
// purchaseFerrari("Sudir", "Krishnaa");

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

// Scenario 1: Pass the args later
const purchaseFerrari = purchaseCar.myBind(car1);
purchaseFerrari("Sudir", "Krishnaa");

// Scenario 2: Pass the args early
// const purchaseFerrari = purchaseCar.myBind(car1, "Sudir", "Krishnaa");
// purchaseFerrari();
