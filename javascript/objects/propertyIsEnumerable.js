let o = {x : 1, y: 2};

console.log(o.propertyIsEnumerable("x"));//true
console.log(o.propertyIsEnumerable("y"))//true
console.log(o.propertyIsEnumerable("toString"))//false 
