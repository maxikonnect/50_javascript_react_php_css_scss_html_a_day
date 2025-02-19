try{
    consol.log("Correct Statement");

}catch(e){
    console.log(e.message);
}//consol is not defined

try{
    let x = 10, y = 0;
    console.log(x + y + z);
}catch(e){
    console.log(e.message);
}

let x = "string";

try{
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    if(x < 5) throw "too low";
    if(x > 5) throw "too high";
}catch(e){
    console.log("Input is " + e);
    //console.log(e.name);
    //console.log(e.message);
}finally{
    console.log(x)
}

/* throw new error */
function getRectArea(width, height){
    if(isNaN(width) && isNaN(height)){
        throw new Error("Parameter is not a number");
    }
    return console.log(width * height);
}

try{
    getRectArea(5, "A");//NaN
    getRectArea(5, 20)//100
    getRectArea("10", "40");//400

}catch(e){
    console.error(e);
}