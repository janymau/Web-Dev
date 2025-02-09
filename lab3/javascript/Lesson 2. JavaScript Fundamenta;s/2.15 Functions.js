// TASK 1: Is "else" required?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// There is actually a big difference, however, in our case, there is not.

// TASK 2: Rewrite the function using '?' or '||'
function checkAge(age) {
  let result = (age > 18) ? true : confirm('Did parents allow you?');
  return result;
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// TASK 3: Function min(a, b)
function min(a,b) {
  let result = (a < b) ? a : b;
  return result;
}

// TASK 4: Function pow(x,n)
function pow(x,n) {
  if (n < 1) {
    alert(`Power ${n} is not supported`);
    return;
  }
  let result = x;
  while (n > 1) {
    result *= x;
    n--;
  }
  return result;
}
alert(pow(3, 2));

/* --------------------------------------------------------- Lecture summary:
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local to the function


let userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given


function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined:
function doNothing() { // empty }
alert( doNothing() === undefined ); // true
An empty return is also the same as return undefined:

function doNothing() {
  return;
}
alert( doNothing() === undefined ); // true


If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

*/
