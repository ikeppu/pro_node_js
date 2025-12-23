class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class SingletonLogger {
  constructor() {
    if (!SingletonLogger.instance) {
      SingletonLogger.instance = new Logger();
    }

    return SingletonLogger.instance;
  }
}

module.exports = SingletonLogger;
