let b = Object.create({x : 2, y : 4});

console.log(b.x + b.y); //6

let p = Object.create(null) //p inherits no props or methods.
let p1 = Object.create(Object.prototype()) //p is like {} or new Object().
