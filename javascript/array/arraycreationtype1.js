//CREATING ARRAYS USING ARRAY LITERALS
let empty = [];
let primes = [2, 3, 5, 7, 11];
let misc = [1.1, true, "stay"];

console.log(empty);
console.log(primes);
console.log(misc);

let base = 1000;
let table = [base + 1, base + 2, base + 3];
console.log(table);

//ARRAY MAY CONTAIN OBJECTS OR OTHER ARRAYS
let arr = [
    [{x: 1, y: 2}],
    [[1, 2, 3, 4]],
];
console.log(arr[1]);
console.log(arr[0][0].x);
console.log(arr[0][0].y);
