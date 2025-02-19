
let timer = setInterval(() => {
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
}, 1000)

setTimeout(()=> {clearInterval(timer); }, 10000);
   