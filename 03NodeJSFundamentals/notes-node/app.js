console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require("./notes.js");

console.log(_.isString(true));
console.log(_.isString("Darwin"));
var filteredArray = _.uniq(['Andrew', 1,2,3,2,1,2]);
console.log(filteredArray);
// var user = os.userInfo();
// console.log(user);
//
// fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}`, function(err){
// });
