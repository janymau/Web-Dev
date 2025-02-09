// TASK 1: Bad Style
function pow(x, n) {
    let result = 1;
    for (i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {
    alert(`Power ${n} is not supported,
          please enter an integer number greater than zero`);
} else {
    alert(pow(x, n));
}

/* UNFIXED FUNCTION:
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
*/

/* LESSON SUMMARY:
There should be a...
1. Space between parameters
2. Curly brace { on the same line, after a space
3. No space between function name and parentheses, between the p-s and the parameter
4. Space after for/if/while...
5. Empty line between logical blocks
6. Spaces around a nested call
7. Semicolon is mandatory
8. Lines are not very long
9. } else { without a line break

All syntax rules described in this chapter (and in the style guides referenced) aim to increase the readability of your code. All of them are debatable.

When we think about writing “better” code, the questions we should ask ourselves are: “What makes the code more readable and easier to understand?” and “What can help us avoid errors?” These are the main things to keep in mind when choosing and debating code styles.

Reading popular style guides will allow you to keep up to date with the latest ideas about code style trends and best practices.

*/
