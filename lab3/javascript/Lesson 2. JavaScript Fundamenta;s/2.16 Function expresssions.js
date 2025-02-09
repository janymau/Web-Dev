/* --------------------------------------------------------- Lecture summary:
There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression.
For example:
let sayHi = function() {
  alert( "Hello" );
};

No matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.
	function sayHi() {
  		alert( "Hello" );
	}
	alert( sayHi ); // shows the function code


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() { // callback function
  alert( "You agreed." );
}
function showCancel() { // another callback function
  alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

Function Declaration: a function, declared as a separate statement, in the main code flow:
// Function Declaration
function sum(a, b) {
  return a + b;
}
Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
// Function Expression
let sum = function(a, b) {
  return a + b;
};

As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/
