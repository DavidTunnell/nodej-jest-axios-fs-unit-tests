//use FileIo.js
const FileIo = require("./fileIo.js");

//create now object instance
const fileIo = new FileIo();

//write hello world to a txt file
fileIo.write("message.txt", "Test Driven Development\nUnit Tests");

//read content of file just created
const message = fileIo.read("message.txt");

//write contents of file to console
console.log(message);