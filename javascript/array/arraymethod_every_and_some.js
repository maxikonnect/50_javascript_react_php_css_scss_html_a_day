let arr = [1, 2, 3, 4, 5, 6, 7];

function checkOut(x){
    return x % 2 === 0;
}

//USING THE SOME METHOD
const ansSome = arr.some(checkOut);
console.log(ansSome);

//USING THE EVERY METHOD

const ansEvery = arr.every(checkOut);
console.log(ansEvery);

