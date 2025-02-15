let arr = [1, 2, 3, 4, 5];

//ADDING ELEMENTS IN ARRAY USING REDUCE

let sum = arr.reduce((x, y)=> x + y, 0);
document.write(sum);
document.write("<br>");

//MULTIPLYING ELEMENTS IN ARRAY USING REDUCE
let product = arr.reduce((x, y)=> x * y, 1);
document.write(product);
document.write("<br>");

//COMPARING TWO NUMBERS
let greater = arr.reduce((x, y)=> x > y ? x : y);
document.write(greater);
document.write("<br>");