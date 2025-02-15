let arr = [1, 2];

arr.push(3, 4, 5, 6);
arr.pop();
arr.shift();
arr.unshift(6);

let b = [... new Set(arr)];
console.log(arr);
