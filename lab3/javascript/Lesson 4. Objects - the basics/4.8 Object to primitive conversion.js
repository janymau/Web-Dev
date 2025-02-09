/* LESSON SUMMARY:
The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators, usually objects implement it the same way as "number")
The specification describes explicitly which operator uses which hint.

The conversion algorithm is:

Call obj[Symbol.toPrimitive](hint) if the method exists,
Otherwise if hint is "string"
try calling obj.toString() or obj.valueOf(), whatever exists.
Otherwise if hint is "number" or "default"
try calling obj.valueOf() or obj.toString(), whatever exists.
All these methods must return a primitive to work (if defined).

In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for string conversions that should return a “human-readable” representation of an object, for logging or debugging purposes.
*/
