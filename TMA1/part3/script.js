var req = new XMLHttpRequest();
req.open("GET", "books/books.json", false);
req.send(null);
var books = JSON.parse(req.responseText);
var len = books.length
console.log(len)