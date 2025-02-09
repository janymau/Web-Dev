/* LESSON SUMMARY:
There are 2 tools to make modern code work on older engines:
1. Transpilers - a special piece of software that translates source code to another source code
        // before running the transpiler
        height = height ?? 100;

        // after running the transpiler
        height = (height !== undefined && height !== null) ? height : 100;
2. Polyfills - a script that updates/adds new functions
        if (!Math.trunc) { // if no such function
            // implement it
            Math.trunc = function(number) {
                // Math.ceil and Math.floor exist even in ancient JavaScript engines
                // they are covered later in the tutorial
                return number < 0 ? Math.ceil(number) : Math.floor(number);
            };
        }
*/
