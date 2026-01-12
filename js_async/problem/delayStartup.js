import { once } from "events";
import { messageService } from "./messageService.js";

async function init() {
  messageService.authenticate();
  await once(messageService, "authenticated");
}

async function notifyUser() {
  await messageService.sendMessage("Hello world");
}

init().then(() => {
  notifyUser();
});
