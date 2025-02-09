/*
    The optional chaining ?. syntax has three forms:

    1. obj?.prop – returns obj.prop if obj exists, otherwise undefined.
    2. obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
    3. obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.
*/
