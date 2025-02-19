/*ParseInt Method */
let x = "20";
console.log(typeof x);//string
x = Number.parseInt(x);
console.log(typeof x)//number

console.log(parseInt("077"));//77
console.log(parseInt("   123 ")); //123

console.log(parseInt(1.9));//1

console.log(parseInt("0xFF", 16))//255
console.log(parseInt("xyz"));//NaN

console.log(parseInt("OxF", 16));//NaN
console.log(parseInt("F", 16));//15
console.log(parseInt("15 * 3", 10));//15
console.log(parseInt("12", 13))//15
console.log(parseInt("123_456"));//123
console.log(parseInt(null, 36));//1112745 in base 36
console.log(parseInt(undefined, 36))//86464843759093 in base 36
console.log(parseInt(15.99, 10))//15
console.log(parseInt(-15.1, 10))//-15


/* PARSEFLOAT */
console.log(parseFloat(3.14)); //3.14
console.log(parseFloat("3.14"));//3.14
console.log(parseFloat("  3.14  "));//3.14
console.log(parseFloat("3.14some non-digit"));//3.14
console.log(parseFloat("FF2"))//NaN

/* NUMBER.ISFINITE */

console.log(isFinite(Infinity));//false
console.log(isFinite(isNaN));//false
console.log(isFinite(-Infinity));//false
console.log(isFinite(0))//true
console.log(isFinite(910))//true
console.log(isFinite(null));//true
console.log(isFinite("0"))//true

/* isNaN  */

console.log(isNaN(null)) //false
console.log(isNaN(NaN))//true
console.log(isNaN(undefined));//true
console.log(isNaN(37))//false
console.log(isNaN("37"))//false
console.log(isNaN("37.37"))//false
console.log(isNaN(""))//false "" converted to 0
console.log(isNaN(new Date()))//false
console.log(isNaN([]))//false
console.log(isNaN([1, 2, 3]));//true
console.log(isNaN([1]))//false


/* Number.isInteger */
console.log(Number.isInteger(0))//true
console.log(Number.isInteger(1))//true
console.log(Number.isInteger(0.1))//false
console.log(Number.isInteger(Math.PI))//false
console.log(Number.isInteger(NaN))//false
console.log(Number.isInteger(Infinity))//false
console.log(Number.isInteger("10"))//false
console.log(Number.isInteger(true))//false
console.log(Number.isInteger(false))//false
console.log(Number.isInteger(5.0))//true


