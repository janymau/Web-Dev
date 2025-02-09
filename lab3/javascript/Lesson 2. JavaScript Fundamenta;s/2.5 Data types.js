// TASK 1: Spring
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

/* --------------------------------------------------------- Lecture summary:
// We can put any type in a var
let message = 'Hello';
message = 12542568;

// Number:
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
let n = 123;
n = 12.345;
alert( "not a number" / 2 ); // NaN, such division is erroneous

// BigInt:
const bigInt = 1234567890123456789012345678901234567890n; // the "n" at the end means it's a BigInt

// String:
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
alert( `the result is ${1 + 2}` );

// Boolean:
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")


// "Null":
let age1 = null;
alert(age1);

// "Undefined":
age2 = undefined;
alert(age2);

// tyoeof operator:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
*/
