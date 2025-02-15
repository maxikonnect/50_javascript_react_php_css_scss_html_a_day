let a = {};

let i = 0;
while(i <= 10){
    a[i] = i * i;
    i++;
}
a.length = i;
console.log(a);//{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100, length: 11}

let total = 0;
for(let j = 0; j < a.length; j++){
    total += a[j];
}
console.log(total);//385