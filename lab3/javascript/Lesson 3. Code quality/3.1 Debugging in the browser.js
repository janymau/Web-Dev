/* LECTURE SUMMARY:
As we can see, there are three main ways to pause a script:
1. A breakpoint.
2. The debugger statements.
    function hello(name) {
        let phrase = `Hello, ${name}!`;

        debugger;  // <-- the debugger stops here

        say(phrase);
    }
3. An error (if dev tools are open and the button  is “on”).
When paused, we can debug: examine variables and trace the code to see where the execution goes wrong.
*/
