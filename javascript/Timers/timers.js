setTimeout(() => { console.log("Ready..."); }, 1000);
setTimeout(() => { console.log("set..."); }, 2000);
setTimeout(() => { console.log("go!"); }, 3000);


let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);
// After 10 seconds: stop the repeating code above.
setTimeout(() => { clearInterval(clock); }, 10000);


let timer = setInterval(() => {
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
}, 1000)

setTimeout(()=> {clearInterval(timer); }, 10000);
   
function calculate(x, y){return x + y};

const sum = calculate(10, 20);

setTimeout(()=> {console.log(sum)}, 2000);