import { once } from "events";
import { messageService } from "./messageService.js";

messageService.authenticate();

async function notifyUser() {
  if (!messageService.authenticated) {
    await once(messageService, "authenticated");
  }

  await messageService.sendMessage("Hello user");
}

notifyUser();

setTimeout(() => {
  notifyUser();
}, 1100);
