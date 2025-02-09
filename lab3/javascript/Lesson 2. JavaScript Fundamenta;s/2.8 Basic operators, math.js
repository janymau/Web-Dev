// TASK 1: The postfix and prefix forms
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

// TASK 2: Assignment result
let a2 = 2;
let x = 1 + (a2 *= 2); // 5

// TASK 3: Type conversions
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // '-9 5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// TASK 4: Fix the addition
let a4 = prompt("First number?", 1);
let b4 = prompt("Second number?", 2);
alert(+a4 + +b4); // 12

/* --------------------------------------------------------- Lecture summary:
    /*

    Precedence	Name	Sign
    …	…	…
    14	unary plus	+
    14	unary negation	-
    13	exponentiation	**
    12	multiplication	*
    12	division	/
    11	addition	+
    11	subtraction	-
    …	…	…
    2	assignment	=
    …	…	…
    */
