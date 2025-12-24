import { Config } from "./config.js";

// Create a new Config instance
const config = new Config((appConfig) => {
  appConfig.set("port", 3000);
  appConfig.set("env", "development");
  appConfig.setMultiple({
    database: "myappdb",
    debug: true,
  });
});

// Access configuration settings
console.log("App Port:", config.get("port")); // Output: App Port: 3000
console.log("All Settings:", config.getAll());

//startup

console.log("App Port after modification attempt:", config.get("port")); // Still 3000
