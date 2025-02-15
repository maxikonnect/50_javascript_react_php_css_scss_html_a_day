//for of example 1
let arr = [1, 2, 3, 4, 5, 6, 7];
let squareArr = [];

for(let item of arr) squareArr.push(item * 2);

console.log(squareArr);
console.log(2 in squareArr);

//Another For Of example 2;

let str = [..."hello world"];
let uniq = [...new Set(str)];
let totalstr = "";

for(let letter of uniq){
    totalstr += letter;
}
console.log(totalstr);

//for of example 3