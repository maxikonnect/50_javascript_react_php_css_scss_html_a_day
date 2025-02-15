
//SPREAD OPERATOR
let a = [1, 2, 3];
let b = [...a, 4, 5];
console.log(b);

//COPYING AN ARRAY
let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy[0] = 5;
console.log(copy);

//USING SPREAD OPEARTOR TO TURN ANY STRING INTO ARRAY
let str = "0123456789";
let arr = [..."0123456789"];
console.log(arr);
const arra = str.split("");
console.log(arra);

//REMOVE DUPLICATE LETTERS
let letters = [..."Hello World"];
let letter = [...new Set(letters)];
console.log(letter);
