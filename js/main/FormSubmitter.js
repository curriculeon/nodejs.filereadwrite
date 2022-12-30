export class FormSubmitter {
  submitForm() {
    // Get the file path from the text input element
    const filePath = document.getElementById('file-path').value;

    // Get the text from the textarea element
    const textToWrite = document.getElementById('text-to-write').value;

    // Create a new instance of the FileReadWrite class with the file path
    const fileReadWrite = new FileReadWrite(filePath);

    // Call the write method with the text to write
    fileReadWrite.write(textToWrite);
  }
}