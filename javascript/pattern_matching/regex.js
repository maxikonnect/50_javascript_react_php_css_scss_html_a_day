/* search */
let str = "JavaScript";
console.log(str.search(/script/ui));//4
console.log(str.search(/AVA/ui))//1

/* REPLACE */

let str1 = "I love JAVAscript because jAVascript is good";
console.log(str1.replace(/javascript/gui, "Javascript"))//I love Javascript because Javascript is good
console.log(str1.replace(/javascript/gui, "Javascript".toUpperCase()))//I love JAVASCRIPT because JAVASCRIPT is good


/* MATCH */
console.log("7 plus 8 equals 15".match(/\d+/g));//['7', '8', '15']