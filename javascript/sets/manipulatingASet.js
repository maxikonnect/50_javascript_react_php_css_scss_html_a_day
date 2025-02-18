let s = new Set(); // Start empty
s.size // => 0
s.add(1); // Add a number
s.size // => 1; now the set has one member
s.add(1); // Add the same number again
s.size // => 1; the size does not change
s.add(true); // Add another value; note that it is fine to mix types
s.size // => 2
s.add([1,2,3]); // Add an array value
s.size // => 3; the array was added, not its elements
s.delete(1) // => true: successfully deleted element 1
s.size // => 2: the size is back down to 2
s.delete("test") // => false: "test" was not a member, deletion failed
s.delete(true) // => true: delete succeeded
s.delete([1,2,3]) // => false: the array in the set is different
s.size // => 1: there is still that one array in the set
s.clear(); // Remove everything from the set
s.size // => 0
s.add(4).add(5).add(6);
console.log(s);