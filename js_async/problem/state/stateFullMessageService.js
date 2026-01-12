import { EventEmitter } from "events";
import { ReadyState } from "./readyState.js";
import { QueuingState } from "./queuingState.js";

class MessageService extends EventEmitter {
  constructor() {
    super();
    this.state = new QueuingState(this);
  }

  authenticate() {
    // Simulate network delay to get a token
    setTimeout(() => {
      this.authenticated = true;
      this.emit("authenticated");

      const prevState = this.state;
      this.state = new ReadyState();
      prevState.disable();
    }, 9000);
  }

  async sendMessage(content) {
    return this.state.sendMessage(content);
  }
}

export const messageService = new MessageService();
