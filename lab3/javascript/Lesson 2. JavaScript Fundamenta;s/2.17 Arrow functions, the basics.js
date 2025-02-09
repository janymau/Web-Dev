// TASK 1: Rewrite with arrow functions:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );


/* --------------------------------------------------------- Lecture summary:
let func = (arg1, arg2, ..., argN) => expression;
let sum = (a, b) => a + b;

let sayHi = () => alert("Hello!");
sayHi();

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
*/
