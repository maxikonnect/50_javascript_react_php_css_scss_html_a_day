let a = {};

let i = 0;
while(i <= 10){
    a[i] = i * i;
    i++;
}
a.length = i;
console.log(a);

let total = 0;
for(let j = 0; j < a.length; j++){
    total += a[j];
}
console.log(total);