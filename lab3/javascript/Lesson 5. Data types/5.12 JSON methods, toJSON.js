// TASK 1: Turn the object into JSON and back
let user = {
    name: "John Smith",
    age: 35
  };

let user2 = JSON.parse(JSON.stringify(user));

// TASK 2: Exclude backreferences
let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };

  room.occupiedBy = meetup;
  meetup.self = meetup;

  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));

  /*
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */

/* LESSON SUMMARY:
JSON is a data format that has its own independent standard and libraries for most programming languages.
JSON supports plain objects, arrays, strings, numbers, booleans, and null.
JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
Both methods support transformer functions for smart reading/writing.
If an object has toJSON, then it is called by JSON.stringify.
*/
