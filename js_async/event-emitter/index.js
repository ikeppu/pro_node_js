import { searchRecordsInCsv } from "./readCSV.js";
import { CsvSearcher } from "./readCSV.class.js";

// searchRecordsInCsv(["./customers.csv", "./sales_data.csv"], "Alice")
//   .on("fileRead", (fileName) => {
//     console.log(`Done reading: ${fileName}`);
//   })
//   .on("recordFound", (file, row) => {
//     console.log(`Found a match in ${file}:`, row);
//   })
//   .on("error", (err) => {
//     console.error("An error occurred:", err.message);
//   });

const searchInstance = new CsvSearcher("Alice");

searchInstance
  .addFile("./customers.csv")
  .addFile("./sales_data.csv")
  .search()
  .on("fileRead", (fileName) => {
    console.log(`Done reading: ${fileName}`);
  })
  .on("recordFound", (file, row) => {
    console.log(`Found a match in ${file}:`, row);
  })
  .on("error", (err) => {
    console.error("An error occurred:", err.message);
  });
