// TASK 1: Sum numbers from the visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );

// TASK 2: Why 6.35.toFixed(1) == 6.3?
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// TASK 3: Repeat until the input is a number
function readNumber() {
    let num;
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
  }

  alert(`Read: ${readNumber()}`);

// TASK 4: An occasional infinite loop
let i = 0;
while (i != 10) {
  i += 0.2;
}
// test
let iT = 0;
while (iT < 11) {
  iT += 0.2;
  if (iT > 9.8 && iT < 10.2) alert( iT );
} // infinite loop cause none of i will be exactly 10

// TASK 5: A random number from min to max
function random(min, max) {
    return min + Math.random() * (max - min);
  }

  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );

// TASK 6: A random integer from min to max
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
