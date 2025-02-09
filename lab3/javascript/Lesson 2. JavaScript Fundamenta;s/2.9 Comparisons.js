// TASK 1: Comparisons
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

/* --------------------------------------------------------- Lecture summary:
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

alert( 0 == false ); // true
alert( '' == false ); // true
alert( 0 === false ); // false, because the types are different
alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
*/
