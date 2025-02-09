// TASK 1: Hello, Object
let user1 = {
    name: "John",
    surname: "Smith",
    name: "Pete"
};
delete user1.name;
// or:
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// TASK 2: Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// TASK 3: Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
function sumObjectProperties(salaries) {
    let result = 0;
    for (let key in obj) {
        result += salaries[key];
    }
    return result;
}

// TASK 4: Multiply numeric property values by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}
