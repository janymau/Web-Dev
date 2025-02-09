// --------------------------------------------------------- Lecture summary:
// String conversion:
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string

// Numeric conversion:
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // numbe

/*
Value	Becomes…
undefined	NaN
null	0
true and false	1 and 0
string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/

// Boolean conversion:
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

/*
Value	Becomes…
0, null, undefined, NaN, ""	false
any other value	true
*/
