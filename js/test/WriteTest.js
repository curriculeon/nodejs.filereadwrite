const assert = require('assert');
const FileReadWrite = require('./FileReadWrite');

export class WriteTest {
    constructor() { }
    
    test() {
        this.testWriteToFile();
        this.testWriteEmptyString();
        this.testWriteLongString();
    }

    testWriteToFile() {
        const fileReadWrite = new FileReadWrite('file.txt');
        const expectedOutput = undefined;
        const input = 'Hello World';
        const actualOutput = fileReadWrite.write(input);
        assert.strictEqual(actualOutput, expectedOutput, 'Test Case 1 Failed');

    }

    testWriteEmptyString() {
        const fileReadWrite = new FileReadWrite('');
        const expectedOutput = 'Invalid file path';
        const input = 'Hello World';
        const actualOutput = fileReadWrite.write(input);
        assert.strictEqual(actualOutput, expectedOutput, 'Test Case 2 Failed');

    }

    testWriteLongString() {
        const fileReadWrite = new FileReadWrite('file.txt');
        const expectedOutput = 'Write operation successful';
        const input = 'Hello World';
        const actualOutput = fileReadWrite.write(input);
        assert.strictEqual(actualOutput, expectedOutput, 'Test Case 3 Failed');

    }
}
