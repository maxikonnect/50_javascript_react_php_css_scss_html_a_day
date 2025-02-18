//square of numbers
const square = function(x){return x * x;}

console.log(square(5));
console.log(square(15));

//factorial of numbers
const factorial = function fact(n){if(n <= 1) return 1; else return n * fact(n - 1);}

console.log(factorial(7));

//sort out numbers
console.log([4, 2, 1, 3].sort(function(a, b){return a - b}));

//squaring functions
const tensquared = (function(x){return x * x;}(10));
console.log(tensquared);



