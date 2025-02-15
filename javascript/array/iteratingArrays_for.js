//ITERATING AN ARRAY USING THE FOR LOOP
let arr = [1, 2, 3, 4, 5];

for(let i = 0, len= arr.length; i < len; i++){
    console.log(arr[i] * 3);
}


let j = 0;
for(;;){
    if(j < arr.length){
        console.log(arr[j] + 5);
    }
    j++;
}