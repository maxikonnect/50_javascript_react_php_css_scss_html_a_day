function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for(let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    // Return the biggest
    return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000
   

function max(x) {
    let maxValue = -Infinity;
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i];
    }   
    return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000