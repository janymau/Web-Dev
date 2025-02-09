// TASK 1: Is array copied?
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4, That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.

// TASK 2: Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// TASK 3: Calling in an array context
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

// TASK 4: Sum input numbers
function sumInput() {

    let numbers = [];

    while (true) {

      let value = prompt("A number please?", 0);

      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;

      numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }

  alert( sumInput() );

// TASK 5: A maximal subarray
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
  }

  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0
