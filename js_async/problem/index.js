// import { messageService } from "./queuedMessageService.js";
import { messageService } from "./state/stateFullMessageService.js";

messageService.authenticate();
messageService.sendMessage("Hello dude :)");
messageService.sendMessage("Hello dude :)");
messageService.sendMessage("Hello dude :)");
messageService.sendMessage("Hello dude :)");
