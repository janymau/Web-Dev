// 1
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

// 2
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }

  let arr = [5, 3, 8, 1];

  let filtered = filterRange(arr, 1, 4);

  alert( filtered ); // 3,1 (matching values)

  alert( arr ); // 5,3,8,1 (not modified)

// 3
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];

      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }

  }

  let arr = [5, 3, 8, 1];

  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

  alert( arr ); // [3, 1]

// 4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

// 5
function copySorted(arr) {
    return arr.slice().sort();
  }

  let arr = ["HTML", "JavaScript", "CSS"];

  let sorted = copySorted(arr);

  alert( sorted );
  alert( arr );

// 6
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };

    this.calculate = function(str) {

      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

// 7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary


// 8
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

// 9
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [ pete, john, mary ];

  sortByAge(arr);

  // now sorted is: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete

// 10
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  Let’s test it the same way:

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };

  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }

  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }


// 11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [ john, pete, mary ];

  alert( getAverageAge(arr) ); // 28

// 12
function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  alert( unique(strings) ); // Hare, Krishna, :-O

// 13
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
