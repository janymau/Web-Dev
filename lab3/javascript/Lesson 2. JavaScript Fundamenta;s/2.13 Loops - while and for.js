// TASK 1: Last loop value
let i1 = 3;

while (i1) {
  alert( i1-- );
} // 1
/*
let i = 3;
alert(i--); // shows 3, decreases i to 2
alert(i--) // shows 2, decreases i to 1
alert(i--) // shows 1, decreases i to 0
// done, while(i) check stops the loop
*/

// TASK 2: Which values does the while loop show?
//1.
let i2 = 0;
while (++i2 < 5) alert( i2 ); // 1, 2, 3, 4
/*
let i = 0;
1. ++0 --> 1, alert(1)
2. ++1 --> 2, alert(2)
...
n. ++4 --> 5, 5<5, loop stops
// done, while(i) check stops the loop
*/
//2.
let i22 = 0;
while (i22++ < 5) alert( i22 ); // 1, 2, 3, 4, 5
/*
let i = 0;
1. 0++ --> 0 < 5, alert(1)
2. 1++ --> 1 < 5, alert(2)
...
n. 4++ --> 4 < 5, alert(5)
// done, while(i) check stops the loop
*/

// TASK 3: Which values get shown by the "for" loop?
//1.
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
//2.
for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// TASK 4: Output even numbers in the loop
for (let i4 = 0; i4 < 10; i4++) {
    if (i % 2 == 0) {
        alert( i4 );
    }
}

// TASK 5: Replace "for" with "while"
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// TASK 7: Output prime numbers
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

/* --------------------------------------------------------- Lecture summary:
The while loop has the following syntax:
while (condition) {
  // code
  // so-called "loop body"
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

The condition check can be moved below the loop body using the do..while syntax:
do {
  // loop body
} while (condition);


for (begin; condition; step) {
  // ... loop body ...
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert('Done!');
*/
