// Event Emitter
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", (event) => {
  console.log("An event ocurred.", event);
});

myE.emit("foo", { hello: "world" });

// Own event emitter
// This is just a pattern
