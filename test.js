// We need to add the dependency to run the dependency
const prompt = require('prompt-sync')();

var query = prompt("Ask anything you want: ");
console.log(query);

console.log("This is the nodemon conetent");

var lang = "Node";
module.exports = {
    lang,
}