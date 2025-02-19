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


