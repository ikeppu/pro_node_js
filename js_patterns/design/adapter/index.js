const localStorage = require("./localStorageAdapter");

console.log("Number of items in localStorage: ", localStorage.length);

// localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");

console.log("theme_mode: ", theme);

if (!theme) {
  console.log("Theme mode not selected. Assigning a default mode...");
  localStorage.setItem("theme_mode", "light");
  localStorage.setItem("setting_code", "5");
}
