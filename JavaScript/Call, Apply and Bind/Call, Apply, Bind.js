// Call, Apply and Bind (V.V.Easy)
// Ref 1: https://www.youtube.com/watch?v=75W8UPQ5l7k
// Ref 2: 4 mins https://youtu.be/VkmUOktYDAU?si=bt1udkVYDvofB7iX&t=43

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

// Call
// SYNTAX: call(objContext, arg1, arg2,...)
purchaseCar.call(car1, "Sudir", "Krishnaa");
// OUTPUT: Thanks for purchasing Ferrari - Russo Red. Have a safe journey Sudir Krishnaa !

// Apply
// SYNTAX: apply(objContext, [arg1, arg2, ...]);
purchaseCar.apply(car1, ["Sudir", "Krishnaa"]);
// OUTPUT: Thanks for purchasing Ferrari - Russo Red. Have a safe journey Sudir Krishnaa !

// Bind
// Syntax: bind(obj) which returns a reusable function binded with the object
let purchaseFerrari = purchaseCar.bind(car1);
purchaseFerrari("Sudir", "Krishnaa");
// OUTPUT: Thanks for purchasing Ferrari - Russo Red. Have a safe journey Sudir Krishnaa !
