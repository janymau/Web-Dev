// TASK 1: If (a string with zero)
if ("0") { // any string except an empty one will become 'true'
  alert( 'Hello' );
} // the code will show

// TASK 2: The name of JavaScript
if (prompt("What's the 'official' name of JavaScript?", '') == 'ECMAScript') {
  alert("Right!")
} else {
  alert("You don't know? 'ECMAScript!")
}

// TASK 3: Show the sign
let number = prompt("Type in a number: ", 0);
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// TASK 4: Rewrite 'if' into '?'
let result = (a + b < 4) ? 'Below' : 'Over';


// TASK 5: Rewrite 'if..else' into '?'
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';
/* --------------------------------------------------------- Lecture summary:
//If we want to execute more than one statement, we have to wrap our code block inside curly braces:
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

if (0) { // 0 is falsy
  //
}

if (1) { // 1 is truthy
  //
}

// Using '?' operand
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );

// The same message ABOVE using the long way:
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
*/
