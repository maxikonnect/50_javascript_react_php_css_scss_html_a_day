const book = {
    "title": "wonderland",
    "author": "Jason Bourne",
    "edition": 7,
    "released": "30/06/2020",
}

console.log(book.title);//wonderland
console.log(book.author);//Jason Bourne
console.log(book.edition);//7
console.log(book["released"]);//30/06/2020
book.title = "Episod";

console.log(book);//{title: 'Episod', author: 'Jason Bourne', edition: 7, released: '30/06/2020'}
