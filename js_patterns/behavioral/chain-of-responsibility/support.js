const Handler = require("./handler");

class BasicSupport extends Handler {
  handle(request) {
    if (request.type === "basic") {
      console.log("Basic Support: Handling request.");
    } else {
      console.log("Basic Support: Passing request to the next handler...");
      super.handle(request);
    }
  }
}

class TechnicalSupport extends Handler {
  handle(request) {
    if (request.type === "technical") {
      console.log("Technical Support: Handling request.");
    } else {
      console.log("Technical Support: Passing request to the next handler...");
      super.handle(request);
    }
  }
}

class ManagerSupport extends Handler {
  handle(request) {
    if (request.type === "manager") {
      console.log("Manager Support: Handling request.");
    } else {
      console.log("Manager Support: Passing request to the next handler...");
      super.handle(request);
    }
  }
}

module.exports = { BasicSupport, TechnicalSupport, ManagerSupport };
