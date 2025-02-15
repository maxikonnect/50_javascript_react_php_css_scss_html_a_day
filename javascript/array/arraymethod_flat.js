let a = [1, [2, 3, [4,]]];
console.log(a.flat(3));

let b = [1, [2, [3, [4, 5,]]]]
console.log(b.flat(5));

let c = ["The early morning", "fire is so nice"];
let d = c.flatMap(str=> str.split(" "));
console.log(d);