//THE REDUCE RIGHT METHOD

let arr = [2, 3, 4];
const power = arr.reduceRight((cumm, acc)=> Math.pow(cumm,acc));
console.log(power);
