class Invoker {
  constructor() {
    this.trace = [];
    this.undone = [];
  }

  run(command) {
    console.log(`We are running comand: ${command.name}`);

    command.execute();

    this.trace.push(command);
  }

  printTrace() {
    this.trace.forEach((command) => console.log(command.name));
  }

  undo() {
    const command = this.trace.pop();

    command.undo();

    this.undone.push(command);
  }

  redo() {
    const command = this.undone.pop();

    command.execute();

    this.trace.push(command);
  }
}

module.exports = new Invoker();
