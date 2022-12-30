export class DeleteTest {
    constructor() { }

    test() {
        this.testCase1();
        this.testCase2();
        this.testCase3();
    }

    testCase1() {
        // setup
        const filePath = 'path/to/test/file.txt';
        const fileRW = new FileReadWrite(filePath);
        const textToWrite = 'some text to write to file';
        fileRW.write(textToWrite);

        // action
        fileRW.delete();

        // assertion
        const fileDoesNotExist = !fs.existsSync(filePath);
        assert.equal(fileDoesNotExist, true, 'File should not exist after being deleted');
    }

    testCase2() {
        // setup
        const filePath = 'path/to/test/file.txt';
        const fileRW = new FileReadWrite(filePath);

        // action
        fileRW.delete();

        // assertion
        const fileDoesNotExist = !fs.existsSync(filePath);
        assert.equal(fileDoesNotExist, true, 'File should not exist if it was never created');
    }

    testCase3() {
        // setup
        const filePath = 'path/to/test/file.txt';
        const fileRW = new FileReadWrite(filePath);
        const textToWrite = 'some text to write to file';
        fileRW.write(textToWrite);

        // action
        fileRW.delete();
        fileRW.delete();

        // assertion
        const fileDoesNotExist = !fs.existsSync(filePath);
        assert.equal(fileDoesNotExist, true, 'File should not exist after being deleted even if delete is called multiple times');
    }
}
