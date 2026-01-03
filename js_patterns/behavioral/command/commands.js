const { writeFile, unlink } = require("fs");
const path = require("path");

class Create {
  constructor(filename, fileContent) {
    this.filename = filename;
    this.fileContent = fileContent;
    this.fullPath = path.join(__dirname, filename);
  }
  get name() {
    return `creating ${this.filename}`;
  }

  execute() {
    writeFile(this.fullPath, this.fileContent, (func) => func);
  }

  undo() {
    unlink(this.fullPath, (func) => func);
  }
}

class Exit {
  get name() {
    return "exit......";
  }

  execute() {
    process.exit(0);
  }
}

module.exports = { Create, Exit };
