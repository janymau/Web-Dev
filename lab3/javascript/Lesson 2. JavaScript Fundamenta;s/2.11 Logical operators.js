// TASK 1: What's the result of OR?
alert( null || 2 || undefined ); // 2, takes the first truthy

// TASK 2: What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); // 1 then 2, because alert() returns undefined

// TASK 3: What's the result of AND?
alert( 1 && null && 2 ); // null, takes the first falsy

// TASK 4: What's the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // 1 and then undefined, alert() returns undefined --> falsy

// TASK 5: The result of OR and OR
alert( null || 2 && 3 || 4 ); // 3, the result of 2&&3 -> 3, then null || 3 || 4 - first truthy -> 3

// TASK 6: Check the range between
if (age >= 14 && age <= 90) {
    alert("Between 14 and 90 inclusively.")
}

// TASK 7: Check the range outside
if (!(age >= 14 && age <= 90)) {
    alert("Outside of range between 14 and 90 inclusively.")
}
if (age < 14 || age > 90) {
    alert("Outside of range between 14 and 90 inclusively.")
}

// TASK 8: A question about 'if'
if (-1 || 0) alert( 'first' ); // truthy, -1 || 0 = -1
if (-1 && 0) alert( 'second' ); // falsy, -1 && 0 = 0
if (null || -1 && 1) alert( 'third' ); // truthy, null || -1 && 1  ->  null || 1  ->  1

// TASK 9: Check the login
let userName = prompt("Who's there?", '');

userName === 'Admin'
? (
    (pass => pass === 'TheMaster'
        ? alert('Welcome!')
        : pass === '' || pass === null
        ? alert('Canceled')
        : alert('Wrong password')
    )(prompt("Password?", ''))
    )
: userName === '' || userName === null
    ? alert('Canceled')
    : alert("I don't know you");

/* --------------------------------------------------------- Lecture summary:
There are 4 logical operators:

1. || - OR
    returns true if any arguments are true; returns the first truthy
    without looking at other arguments
2. && - AND
    returns true if all arguments are true; returns first falsy or the last
    value if all are truthies
3. ! - NOT
    converts a single argument into boolea and returns the inverse value; the
    same as Boolean()
4. ?? - Nullish Coalescing


// OR:
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}
alert( 1 || 0 ); // 1 (1 is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// AND:
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// NOT:
alert( !true ); // false
alert( !0 ); // true
alert( !!"non-empty string" ); // true ---- converts to boolean
alert( !!null ); // false
*/
