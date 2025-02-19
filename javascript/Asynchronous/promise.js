function thingsToDo(){
    console.log("Wake Up");
    setTimeout(() => console.log("Dress Up"), 2000);
    console.log("brush teeth");
};
thingsToDo();

function orderCoffee(){
    return new Promise((resolve, reject)=>{
        let rating = Math.floor(Math.random() * 10);

        console.log(rating);

        if(rating > 5){
             resolve ("I am feeling great");
        }
        else{
             reject (new Error("We are heading to Starbuck"));
        }
    })
}

orderCoffee()
    .then(mood => console.log(mood))
    .catch(err => console.log(err))
    .finally(()=> console.log("Decision been made"));



/* PROMISE EXAMPLE 2 */
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(console.log(1)), 1000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(console.log(2)), 2000);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(console.log(3)), 3000);
});

const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(console.log(4)), 4000);
});

const p5 = new Promise((resolve, reject)=>{
    reject(new Error('reject'));
})

Promise.all([p1, p2, p3, p4])
    .then(values => console.log(values))
    .catch(err => console.log(err))
    .finally(()=> console.log("Promise Done"));