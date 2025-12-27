// const fs = require("fs");
const path = require("path");

const FS_PROXY = require("./FS_PROXY");

const fs = new FS_PROXY(require("fs"));

const txtFilePath = path.resolve(__dirname, "testFile.txt");
const jsonFilePath = path.resolve(__dirname, "testFile.json");

const handleFileRead = (err, data) => {
  if (err) {
    console.error("Error occurred:", err);
    process.exit(1);
  }

  console.log("File content:");
  console.log(data);
};

// Reading the text file
fs.readFile(txtFilePath, "utf8", handleFileRead);

// Reading the json file
// fs.readFile(jsonFilePath, "utf8", handleFileRead);
