let x = {a : 1, b: 2};
let key = "";
for(let alpha of Object.keys(x)){
    key += alpha;
}

console.log(key);//ab

let sum = 0;
for(let value of Object.values(x)){
    sum += value;
}
console.log(sum)//3

let output = ""
for(let [key, value] of Object.entries(x)){
    output += key + " : " + value;
}
console.log(output);

let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
    frequency[letter]++;
    } else {
    frequency[letter] = 1;
    }
}
console.log(frequency) // => {m: 1, i: 4, s: 4, p: 2}

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
 unique.push(word);
}
console.log(unique) // => ["Na", "na", "Batman!"]