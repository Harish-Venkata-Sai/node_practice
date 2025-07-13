console.log("server is running");


function add(a, b) {
    return a + b;
}

// arrow function
// var add = (a,b) => {return a + b;};
// var subtract = (a,b) => a-b;
// var res = subtract(1,1);
// console.log(res);

// automatically calls the function
// (function() {
//     console.log("MERN Stack");
// })();


// callback function
// var add = function(a,b, callback) {
//     var res = a+b;
//     console.log("result: "+res);
//     callback();
// };

// add(1,3, function callback() {
//     console.log("Addition Succesfull");
// });

// using 'fs' and 'os' packages
// const fs = require('fs');
// const os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('sample.txt', "Hi"+user.username+"!\n", () => {
//     console.log("File created successfully.");
// });



// using 'lodash' package 
const _ = require('lodash');   // first import the package
var array = ['name', 'age', 'name', 1, 2, 1, 2, "age"];
console.log(_.uniq(array));
console.log(_.isEmpty());               // ture (has nothing)    
// console.log(_.isEmpty([]));          // true (empty array)
// console.log(_.isEmpty({}));          // true (empty object)
// console.log(_.isEmpty(""));          // true (empty string)
// console.log(_.isEmpty([1, 2, 3]));   // false (not empty)
// console.log(_.isEmpty({ a: 1 }));    // false (not empty)
// console.log(_.isEmpty(0));           // true (Lodash considers numbers empty)
// console.log(_.isEmpty(null));        // true (null is empty)
// console.log(_.isEmpty(undefined));   // true (undefined is empty)

var prompt = require('prompt-sync')();
var age = prompt("Enter your age: ");
console.log(age);

// we can run/connect another files directly from here.
const test = require('./test.js');
console.log(test.lang);