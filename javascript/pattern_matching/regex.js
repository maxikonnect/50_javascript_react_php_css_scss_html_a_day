/* search */
let str = "JavaScript";
console.log(str.search(/script/ui));//4
console.log(str.search(/AVA/ui))//1

/* REPLACE */

let str1 = "I love JAVAscript";
console.log(str1.replace(/javascript/gui, "Javascript"))//I love Javascript
console.log(str1.replace(/javascript/gui, "Javascript".toUpperCase()))//I love JAVASCRIPT