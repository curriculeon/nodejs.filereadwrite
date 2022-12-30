const fs = require('fs');

export class FileReadWrite {
    constructor(filePath) {
        this.filePath =filePath;
    }
    
    write(textToWriteToFile) {
        fs.writeFileSync(this.filePath, textToWriteToFile);
    }

    read() {
        return fs.readFileSync(this.filePath, 'utf8');
    }

    delete() {
        // check if file exists at this.filePath
        if (!fs.existsSync(this.filePath)) {
          console.error(`File at ${this.filePath} does not exist.`);
          return false;
        }
    
        // delete file at this.filePath
        fs.unlinkSync(this.filePath);
        console.log(`Successfully deleted file at ${this.filePath}`);
        return true;
      }
}
