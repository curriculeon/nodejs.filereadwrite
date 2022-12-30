class FileReadWriteTestRunner {
    runTests() {
        let writeTest = new WriteTest();
        writeTest.runTests();
        
        let readTest = new ReadTest();
        readTest.runTests();
        
        let deleteTest = new DeleteTest();
        deleteTest.runTests();
    }
}
