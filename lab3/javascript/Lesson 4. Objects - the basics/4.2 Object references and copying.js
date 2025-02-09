/* LESSON SUMMARY:

A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
When an object variable is copied, the reference is copied, but the object itself is not duplicated.
An important side effect of storing objects as references is that an object declared as const can be modified.
We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

const user = {
  name: "John"
};
user.name = "Pete"; // (*)
alert(user.name); // Pete

let a = {};
let b = a; // copy the reference
alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let a = {};
let b = {}; // two independent objects
alert( a == b ); // false

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
alert( user.sizes.height ); // 182



let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

*/
