// TASK 1: Working with variables
let admin, name;
admin = 'John';
name = admin;
alert(name);

// TASK 2: Giving the right name
let currentUserName = 'John';
const PLANET_EARTH = "Earth"
let ourPlanetName = "Earth";

// TASK 3: Uppercase const?
const birthday = '18.04.1982';
const age = someCode(birthday);

const BIRTHDAY = '18.04.1982'; // we could use it
const AGE = someCode(BIRTHDAY); // we should not use it, an age is changing constantly with time; uppercase const-s are usually 'hard-coded'

/* --------------------------------------------------------- Lecture summary:
// A var is a 'named storage for data', in JS we create it via word 'let'
let message;
message = 'Hello';
alert(message)

let message2 = 'Hello again!'; // define the var right away
alert(message2)

// Declaring multiple var-s
//1. One line
let user = 'Roach', age = 27, message3 = '*grunting*';

//2. Multiline
let name = 'John'; // for the sake of better readability
let surname = 'MacTavish';

//3. "Comma-first"
let anotherName = 'John'
    , anotherSurname = 'Price'

//4. Stylish multiline
let name3 = 'Simon',
    surname3 = 'Riley';

// In older scripts instead of 'let' is used 'var'
// Declaring a var twice will lead to an error

// Var name should contain only letters, digits, symbols '$' or '_' and the first char must not be a digit. Var-s are CASE-SENSITIVE
let $ = 1;
let _ = 2;
alert($ + _);

// Constants can't be reassigned
const myBirthday = '01.09.2005';
const COLOR_RED = "#F00";
let color = COLOR_RED;
alert(color);
*/
