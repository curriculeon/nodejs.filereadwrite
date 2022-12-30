const assert = require('assert');
const FileReadWrite = require('./FileReadWrite');

export class ReadTest {
    constructor() { }

    test() {
        this.testReadWithEmptyFile();
        this.testReadWithNonEmptyFile();
        this.testReadAfterMultipleWrites();
    }

    testReadWithEmptyFile() {
        const filePath = 'empty.txt';
        const file = new FileReadWrite(filePath);
        file.write('');

        const actual = file.read();
        const expected = '';
        assert.strictEqual(actual, expected);
    }

    testReadWithNonEmptyFile() {
        const filePath = 'nonempty.txt';
        const file = new FileReadWrite(filePath);
        file.write('hello world');

        const actual = file.read();
        const expected = 'hello world';
        assert.strictEqual(actual, expected);
    }

    testReadAfterMultipleWrites() {
        const filePath = 'multiplewrites.txt';
        const file = new FileReadWrite(filePath);
        file.write('hello');
        file.write(' world');

        const actual = file.read();
        const expected = 'hello world';
        assert.strictEqual(actual, expected);
    }
}
