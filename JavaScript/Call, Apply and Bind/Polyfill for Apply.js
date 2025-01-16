// Polyfill for Apply
// Ref: Just 2mins https://youtu.be/VkmUOktYDAU?si=r0fm8bDPsBG8_mxM&t=1614

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

// purchaseCar.apply(car1, ["Sudir", "Krishnaa"]);

// Polyfill for Apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car1, ["Sudir", "Krishnaa"]);
