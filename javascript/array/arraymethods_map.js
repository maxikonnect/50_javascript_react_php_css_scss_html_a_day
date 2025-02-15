//Using the map function on arrays
let arr = [1, 2, 3, 4, 5, 6];

function square(x){
    return x * x;
}

const sq = arr.map(square, arr);
console.log(sq);

let arra = [2, 4, 6, 8, 10];

function expression(x){
    return (2 * (x**2) + (4 * x) + 5);
}

const answer = arra.map(expression, arra);
console.log(answer);
