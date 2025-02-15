let arr = [2, 3, 4, 5, 7];

const answer = arr.find(function(x){
    return x % 2 === 0;
})

const answerFindIndex = arr.findIndex(function(x){
    return x % 2 === 0;
})
console.log(answer);
console.log(answerFindIndex);