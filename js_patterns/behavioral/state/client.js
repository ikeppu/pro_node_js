const WebSocket = require("ws");
const readline = require("readline");

class ChatClient {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.connect();
    this.setupInput();
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.on("open", () => {
      console.log("Connected to the server.");
    });

    this.socket.on("message", (data) => {
      this.handleMessage(data.toString());
    });

    this.socket.on("close", () => {
      console.log("Connection closed.");
      // No reconnection or offline handling
    });

    this.socket.on("error", (error) => {
      console.log("Connection error:", error.message);
      // No reconnection or offline handling
    });
  }

  sendMessage(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message, (err) => {
        if (err) {
          console.log("Send error:", err.message);
        } else {
          console.log(`Data sent: ${message}`);
        }
      });
    } else {
      console.log("Cannot send message. Not connected to the server.");
      // No message queuing or offline handling
    }
  }

  setupInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "",
    });

    rl.on("line", (line) => {
      const message = line.trim();
      if (message) {
        this.sendMessage(message);
      }
    });
  }

  handleMessage(message) {
    console.log(`\nReceived: ${message}`);
    process.stdout.write(""); // Refresh prompt
  }
}

// Start the client
const client = new ChatClient("ws://localhost:8080");
