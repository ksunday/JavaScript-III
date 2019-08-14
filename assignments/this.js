/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. The this keyword is going to default to the window object
 *
 * 2. With Implicit Binding, the This keyword points to whatever is left of the dot on the invocation of the function
 *
 * 3. With Explicit Binding you can use .call and .apply and .bind to tell what the this is going to be
 *
 * 4. When you have a function invoked with the New keyword the this keyword is bound to the new object being contructed
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
let myAge = function() {
  console.log(this.Age);
};

let me = {
  Age: 24
};
myAge();
window.Age = 24;
myAge();

// Principle 2
// code example for Implicit Binding
var Teacher = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    }
  };
};

var gannon = Teacher("gannon", 25);
gannon.sayName();

// Principle 3
// code example for New Binding
var Airsupport = function(plane, cannon, ordinance) {
  this.plane = plane;
  this.cannon = cannon;
  this.ordinance = ordinance;
};

var dogfighter = new Airsupport("BF109", "menenschloss", "2x 500kg bombs");

console.log(dogfighter);
// Principle 4
// code example for Explicit Binding

var BFClass = function() {
  console.log("the best class is" + " " + this.class);
};

var Kyle = {
  class: "Support",
  loadout: "MG42"
};

BFClass.call(Kyle);
//1
