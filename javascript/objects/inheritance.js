let o = new Object() // {};
o.x = 1;
o.y = 4;
let p = Object.create(o);
console.log(p.x);// 1
console.log(p.y) // 4