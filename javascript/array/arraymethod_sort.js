let arr = [2, 3, 4, 1, 7, 6];

//sorting in ascending order
const arrange = arr.sort((a, b)=>{
    return a - b;
})

//sort in descending order
const arrangeDown = arr.sort((a, b)=>{
    return b - a;
})

let a = ["ant", "Bug", "cat", "Dog"];
const alphaArr = a.sort(function(s, t){
    let b = s.toLowerCase();
    let c = t.toLowerCase();
    if(b < c) return -1;
    if(b > c) return 1;
    return 0;
})
//Output answers
console.log(arrange);
console.log(arrangeDown);
console.log(alphaArr);