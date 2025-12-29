const { BasicSupport, TechnicalSupport, ManagerSupport } = require("./support");

// Create the handlers
const basic = new BasicSupport();
const technical = new TechnicalSupport();
const manager = new ManagerSupport();

// Set up the chain: Basic -> Technical -> Manager
basic.setNext(technical).setNext(manager);

// Create some requests
const request1 = { type: "basic" };
const request2 = { type: "technical" };
const request3 = { type: "manager" };
const request4 = { type: "unknown" };

// Send requests through the chain
basic.handle(request1); // Basic Support will handle this
basic.handle(request2); // Technical Support will handle this
basic.handle(request3); // Manager Support will handle this
basic.handle(request4); // No handler will handle this
