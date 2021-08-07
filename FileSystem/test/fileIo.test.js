//use file we will be testing
const FileIo = require('../fileIo.js');
//use file system for cleanup after creation
const fs = require('fs');

//test class functionality
describe('FileIo', () => {
    //test read function
    describe('read', () => {
        it("should get file contents and return them", () => {
            // - Arrange -
            //create instance of the object we want to test
            const file = new FileIo();
            // - Act -
            //get contents of file at location
            const message = file.read("./message.txt");
            // - Assert - 
            //check expectation that something is returned
            expect(message).toBeDefined();
        });
    });

    describe('write', () => {
        it("should write a file with particular text that was passed as a parameter", () => {
            // - Arrange -
            //create instance of the object we want to test
            const file = new FileIo();
            // file name and text passed to file
            const testFileName = "./test.txt";
            const passedText = "My Test!";
            // - Act -
            //get contents of file at location
            file.write(testFileName, passedText);
            //get message from test file
            const message = file.read(testFileName);
            // - Assert - 
            //check if the file returned after writing is defined
            expect(file.read(testFileName)).toBeDefined();
            //check if the text in the file is as expected
            expect(message).toEqual(passedText);
            //delete file created in test
            fs.unlinkSync(testFileName);
        });
    });
});