let target = {x : 1}, source = {y: 2, z : 3};

for(let key of Object.keys(source)){
    target[key] = source[key];
}

console.log(target);//{x:1, y:2, z:3}

//OBJECT.assign
let p = {x : 1}, q = {y: 2, z : 3};
Object.assign(p, q);
console.log(p)
