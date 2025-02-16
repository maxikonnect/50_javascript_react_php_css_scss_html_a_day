let s = "Hello, world"; // Start with some text.
// Creating modified versions of a string
console.log(s.replace("llo", "ya")) // => "Heya, world"
console.log(s.toLowerCase())// => "hello, world"
console.log(s.toUpperCase()) // => "HELLO, WORLD"
console.log(s.normalize())// Unicode NFC normalization: ES6
console.log(s.normalize("NFD")) // NFD normalization. Also "NFKC", "NFKD