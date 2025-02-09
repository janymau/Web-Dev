// TASK 1: Store 'unread' flags
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readMessages = new WeakSet();

  // two messages have been read
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages has 2 elements

  // ...let's read the first message again!
  readMessages.add(messages[0]);
  // readMessages still has 2 unique elements

  // answer: was the message[0] read?
  alert("Read message 0: " + readMessages.has(messages[0])); // true

  messages.shift();
  // now readMessages has 1 element (technically memory may be cleaned later)

// TASK 2: Store read dates
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readMap = new WeakMap();

  readMap.set(messages[0], new Date(2017, 1, 1));

/* LESSON SUMMARY:
WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

That comes at the cost of not having support for clear, size, keys, values…

WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.
*/
