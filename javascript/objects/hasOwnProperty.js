let o = {x : 1, y: 2};

console.log(o.hasOwnProperty("x"));//true
console.log(o.hasOwnProperty("y"))//true
console.log(o.hasOwnProperty("toString"))//false toString is an inherited property
