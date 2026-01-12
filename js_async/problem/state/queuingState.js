const FUNCTIONS_NEED_AUTH = ["sendMessage"];

class QueuingState {
  constructor(service) {
    this.service = service;
    this.commandQueue = [];

    FUNCTIONS_NEED_AUTH.forEach((methodName) => {
      this[methodName] = (...args) => {
        console.log(`Command queued: `, methodName, args);

        return new Promise((res, rej) => {
          const command = () => {
            service[methodName](...args).then(res, rej);
          };
          this.commandQueue.push(command);
        });
      };
    });
  }

  disable() {
    this.commandQueue.forEach((cmd) => {
      cmd();
    });
    this.commandQueue = [];
  }
}

export { QueuingState };
