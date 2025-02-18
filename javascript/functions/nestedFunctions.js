function hypothenuse(a, b){
    function square(x){ return x * x;}
    return {"value" : Math.sqrt(square(a) + square(b))};
        
}

console.log(hypothenuse(3, 4));//{value: 5}