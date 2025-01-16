// Polyfill for Call
// Ref: Just 3mins https://youtu.be/VkmUOktYDAU?si=KepIt6haVOzXrkQF&t=1386

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

// purchaseCar.call(car1, "Sudir", "Krishnaa");

// Polyfill for Call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }

  context.fn = this;
  context.fn(...args);
};

// purchaseCar.myCall(car1, "Sudir", "Krishnaa");
