// TASK 1: Sum the properties
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }

    return sum; // 650
  }

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  alert( sumSalaries(salaries) ); // 650

// TASK 2: Count properties
function count(obj) {
    return Object.keys(obj).length;
  }

/* LESSON SUMMARY:
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.

Objects lack many methods that exist for arrays, e.g. map, filter and others.

If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

Use Object.entries(obj) to get an array of key/value pairs from obj.
Use array methods on that array, e.g. map, to transform these key/value pairs.
Use Object.fromEntries(array) on the resulting array to turn it back into an object.
*/
