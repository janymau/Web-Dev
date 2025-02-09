// TASK 1: Can I add a string property?
let str = "Hello";
str.test = 5;
alert(str.test);
// This example clearly shows that primitives are not objects.
/* Depending on whether you have use strict or not, the result may be:

undefined (no strict mode)
An error (strict mode).

*/
