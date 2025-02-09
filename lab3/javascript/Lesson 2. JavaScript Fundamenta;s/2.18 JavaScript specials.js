/* --------------------------------------------------------- Lecture summary:
1. Code Structure
Statements end with a semicolon (;), but JavaScript has automatic semicolon insertion.
Semicolons are not needed after code blocks {...} or loops.

2. Strict Mode
"use strict"; enables modern JavaScript behavior and prevents old-fashioned quirks.
It must be at the top of a script or inside a function.

3. Variables & Data Types
Variables are declared using:
let (modifiable), const (constant), and var (old-style).
Variable naming:
Can include letters, digits (not first), $, and _.
Data Types (8 total):
number, bigint, string, boolean, null, undefined, object, symbol.
typeof operator helps check data types, but:
typeof null → "object" (a known mistake).
typeof function() {} → "function" (special case).

4. User Interaction
prompt(question, default) → Input from user (string or null).
confirm(question) → OK (true) / Cancel (false).
alert(message) → Displays a message.

5. Operators
Arithmetic: +, -, *, /, % (modulo), ** (power).
String Concatenation:
"1" + 2 → "12" (converts numbers to strings).
Comparison:
== converts types (0 == false → true).
=== checks strict equality (no type conversion).
null and undefined only equal each other (null == undefined → true).
Logical Operators:
&& (AND), || (OR) – short-circuit evaluation.
! (NOT) converts value to boolean.
Nullish Coalescing (??) → Returns first defined value:
let user = name ?? "Guest"; // If name is null/undefined, use "Guest"

6. Loops
Three types:
while (condition) { ... }
do { ... } while (condition);
for (let i = 0; i < 10; i++) { ... }
break (exit loop) and continue (skip iteration).
Labels allow breaking nested loops.

7. Switch Statement
Replaces multiple if conditions, uses === for comparison.
switch (value) {
  case "18": alert("This works!"); break;
  default: alert("Other value");
}
8. Functions
Ways to declare:
Function Declaration (hoisted):
function sum(a, b) { return a + b; }
Function Expression:
    let sum = function(a, b) { return a + b; };
Arrow Function (short syntax):
    let sum = (a, b) => a + b;
    let sayHi = () => alert("Hello");

Functions have local variables and can have default parameters:
    function sum(a = 1, b = 2) { return a + b; }
Return values: If no return, function returns undefined.
*/
