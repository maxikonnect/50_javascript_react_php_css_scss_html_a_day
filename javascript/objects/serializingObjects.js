let p = {x: 1, y: 2, z: 3};
let s = JSON.stringify(p);
let t = JSON.parse(s);

console.log(s);//{"x":1,"y":2,"z":3}
console.log(t);//{x: 1, y: 2, z: 3};