const sum = (x, y)=> x + y;
console.log(sum(20, 30)); //50

const sum1 = (x, y)=>{return x + y};

console.log(sum1(10, 30));//40

const f = (x, y)=> ({x: 1, y: 1});
console.log(f());//{x: 1, y: 1}

const g = (x)=>{
    return {x : 5};
}
console.log(g());//{x: 5}