let x = (1 && 2) ?? 3; // Works
alert(x); // 2

/* --------------------------------------------------------- Lecture summary:
It treats null and undefined similarly.
a ?? b:
1. if a is defined, then a
2. if a isn't defined, then b
returns the first argument if it is not null or undefined

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)
*/
