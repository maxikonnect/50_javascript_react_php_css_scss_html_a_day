/*Example of asynchronous function */
function thingsToDo(){
    console.log("Wake Up");
    setTimeout(() => console.log("Dress Up"), 2000);
    console.log("brush teeth");
};
thingsToDo();


/*Promise Example */
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


document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the correct API
    const fetchHP = fetch("https://hp-api.onrender.com/api/characters");

    // Grab the main element 
    const main = document.getElementById("main");

    // Function to map characters to a list
    const mapCharacters = (characters) => {
        const names = characters.map(character => `<li>${character.name}</li>`).join(""); // Use .join("") to avoid commas
        return `<ul>${names}</ul>`;
    };

    // Fetch data and update the page
    fetchHP
        .then(response => response.json()) // Convert response to JSON
        .then(characters => {
            if (main) {  // Ensure main element exists before setting innerHTML
                main.innerHTML = mapCharacters(characters);
            } else {
                console.error("Error: Element with ID 'main' not found!");
            }
        })
        .catch(error => console.error("Error fetching data:", error)); // Handle fetch errors
});




const fetchHP = fetch("https://hp-api.onrender.com/api/characters")

fetchHP.then(response => {
  return response.json();
}).then(characters => console.log(characters));