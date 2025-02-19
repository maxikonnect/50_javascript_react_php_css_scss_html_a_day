let paragraph = document.createElement("p"); // Create an empty <p> element
let hr = document.createElement("hr");
let emphasis = document.createElement("em"); // Create an empty <em> element
emphasis.append("World"); // Add text to the <em> element
paragraph.append("Hello ", emphasis, "!"); // Add text and <em> to <p>
paragraph.prepend("¡"); // Add more text at start of <p>
paragraph.innerHTML // => "¡Hello <em>World</em>!"

let greeting = document.querySelector(".greeting");
document.body.append(paragraph);
document.body.append(hr);
document.body.append(emphasis);

/* Add and remove classes */
// When we want to let the user know that we are busy, we display
// a spinner. To do this we have to remove the "hidden" class and add the
// "animated" class (assuming the stylesheets are configured correctly).
let spinner = document.querySelector("#spinner");
spinner.classList.remove("hidden");
spinner.classList.add("animated");
spinner.classList.toggle("animated");