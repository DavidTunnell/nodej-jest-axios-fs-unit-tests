//require fs
const fs = require("fs");

//create constructor function/class
function FileIO() {}

//read file
FileIO.prototype.read = function(file) {
    return fs.readFileSync(file, "utf8");
};

//write data to file at path
FileIO.prototype.write = function(path, data) {
    return fs.writeFileSync(path, data);
};

//make available to be required
module.exports = FileIO;