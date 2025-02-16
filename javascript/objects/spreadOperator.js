let o = {x : 1, y : 2};
let dimension = {width: 100, height: 200};

rect = {...o, ...dimension};
console.log((rect.x + rect.y) * rect.width);//300