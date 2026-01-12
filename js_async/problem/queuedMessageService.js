import { EventEmitter } from "events";

class MessageService extends EventEmitter {
  authenticated = false;
  commandQueue = [];

  authenticate() {
    // Simulate network delay to get a token
    setTimeout(() => {
      this.authenticated = true;
      this.emit("authenticated");

      this.commandQueue.forEach((command) => {
        command();
      });
      this.commandQueue = [];
    }, 9000);
  }

  async sendMessage(content) {
    if (!this.authenticated) {
      //   throw new Error("Not authenticated yet");
      console.log(`Request queued: `, content);
      return new Promise((res, rej) => {
        const command = () => {
          this.sendMessage(content).then(res, rej);
        };
        this.commandQueue.push(command);
      });
    }

    console.log(`Message sent: ${content}`);
  }
}

export const messageService = new MessageService();
