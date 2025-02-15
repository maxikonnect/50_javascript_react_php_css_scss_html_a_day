let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(x){
    return x % 2 === 0;
}

const answer = arr.filter(even);
console.log(answer);