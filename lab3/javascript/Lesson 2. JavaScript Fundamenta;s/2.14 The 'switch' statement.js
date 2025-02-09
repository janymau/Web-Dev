// TASK 1: Rewrite the 'switch' into an 'if'
let browser = prompt("Input a browser's name", '');
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
           || browser == 'Firefox'
           || browser == 'Safari'
           || browser == 'Opera') {
    alert("Okay, we support these browsers too!");
} else {
    alert("We hope that this page looks ok!");
}

// TASK 2: Rewrite 'if' into 'switch'
let a = +prompt('a?', '');
switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3')
        break;
}

/* --------------------------------------------------------- Lecture summary:
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

If there is no break then the execution continues with the next case without any checks.
An example without break:

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
In the example above we’ll see sequential execution of three alerts:
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );


let a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');

*/
