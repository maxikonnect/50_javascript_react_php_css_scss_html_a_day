let o = {x: 1, y: 2, z: 3};

for(let p in o){
    console.log(p) // x y z;
}

for(let p in o){
    console.log(o[p]);// 1 2 3
}