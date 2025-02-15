let arr = [..."Party Tonight"];
let str = ""
arr.forEach((value)=>{
    str += value.toUpperCase();
})

console.log(str);

let newStr = "";
arr.forEach(value=>{
    if(/[aeiou]/.test(value)){
        newStr += value;
    }
})

console.log(newStr);