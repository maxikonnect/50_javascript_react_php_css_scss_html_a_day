
let m = new Map(); // Create a new, empty map
let n = new Map([ // A new map initialized with string keys mapped to numbers
 ["one", 1],
 ["two", 2]
]);


let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2}; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x", 1], ["y", 2]])

let m = new Map(); // Start with an empty map
m.size // => 0: empty maps have no keys
m.set("one", 1); // Map the key "one" to the value 1
m.set("two", 2); // And the key "two" to the value 2.
m.size // => 2: the map now has two keys
m.get("two") // => 2: return the value associated with key "two"
m.get("three") // => undefined: this key is not in the set
m.set("one", true); // Change the value associated with an existing key
m.size // => 2: the size doesn't change
m.has("one") // => true: the map has a key "one"
m.has(true) // => false: the map does not have a key true
m.delete("one") // => true: the key existed and deletion succeeded
m.size // => 1
m.delete("three") // => false: failed to delete a nonexistent key
m.clear(); // Remove all keys and values from the map

let m = new Map(); // Start with an empty map.
m.set({}, 1); // Map one empty object to the number 1.
m.set({}, 2); // Map a different empty object to the number 2.
m.size // => 2: there are two keys in this map
m.get({}) // => undefined: but this empty object is not a key
m.set(m, undefined); // Map the map itself to the value undefined.
m.has(m) // => true: m is a key in itself
m.get(m) // => undefined: same value we'd get if m wasn't a key

