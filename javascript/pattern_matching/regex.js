/* search */
let str = "JavaScript";
console.log(str.search(/script/ui));//4
console.log(str.search(/AVA/ui))//1

/* REPLACE */

let str1 = "I love JAVAscript because jAVascript is good";
console.log(str1.replace(/javascript/gui, "Javascript"))//I love Javascript because Javascript is good
console.log(str1.replace(/javascript/gui, "Javascript".toUpperCase()))//I love JAVASCRIPT because JAVASCRIPT is good


/* MATCH */
console.log("7 plus 8 equals 15".match(/\d+/g));//['7', '8', '15']
console.log("7 plus 8 equals 15".match(/\w+/g))//['7', 'plus', '8', 'equals', '15']
console.log("7 plus 8 equals 15".match(/\D+/g))//[' plus ', ' equals ']


let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
let fullurl, protocol, host, path;
if (match !== null) {
 fullurl = match[0]; // fullurl == "http://www.example.com/~david"
 protocol = match[1]; // protocol == "http"
 host = match[2]; // host == "www.example.com"
 path = match[3]; // path == "~david"
}


const words = /\b\p{Alphabetic}+\b/gu; // \p is not supported in Firefox yet
const text1 = "This is a naïve test of the matchAll() method.";
for(let word of text1.matchAll(words)) {
 console.log(`Found '${word[0]}' at index ${word.index}.`);
}

//Found 'This' at index 0.
//Found 'is' at index 5.
//Found 'a' at index 8.
//Found 'naïve' at index 10.
//Found 'test' at index 16.
//Found 'of' at index 21
//Found 'the' at index 24.
//Found 'matchAll' at index 28.
//Found 'method' at index 39.

let str2 = "my name is luke";
console.log(str2.match(/\b\p{Alphabetic}+\b/gu));//['my', 'name', 'is', 'luke']
console.log(str2.split(" "));//['my', 'name', 'is', 'luke']


/* SPLIT */
"1, 2, 3,\n4, 5".split(/\s*,\s*/) // => ["1", "2", "3", "4", "5"]
const htmlTag = /<([^>]+)>/; // < followed by one or more non->, followed by >
"Testing<br/>1,2,3".split(htmlTag) // => ["Testing", "br/", "1,2,3"]
"123,456,789".split(",") // => ["123", "456", "789"]


/* REGEXP */
// Find all five-digit numbers in a string. Note the double \\ in this case.
let zipcode = new RegExp("\\d{5}", "g");
console.log(zipcode.test("12345"));//true
let exactMatch = /JavaScript/;
let caseInsensitive = new RegExp(exactMatch, "i");
