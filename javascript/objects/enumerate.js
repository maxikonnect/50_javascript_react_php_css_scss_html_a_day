for(let p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}

for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all method
}