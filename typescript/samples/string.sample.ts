import { S } from "ts-toolbelt";
type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

const test: SplitPath = ["Users", "John", "Documents", "notes.txt"];

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type Event = "log_in" | "log_out" | "sign_up";

type UppercaseEvent = Uppercase<Event>;

type ObjectOfKeysE = Record<UppercaseEvent, string>;

const SelfHostedSignupProgress = {
  START: "START",
  CREATED_CUSTOMER: "CREATED_CUSTOMER",
  CREATED_INTENT: "CREATED_INTENT",
  CONFIRMED_INTENT: "CONFIRMED_INTENT",
  CREATED_SUBSCRIPTION: "CREATED_SUBSCRIPTION",
  PAID: "PAID",
  CREATED_LICENSE: "CREATED_LICENSE",
};

// type MetadataGatherWireTransferKeys = `${ValueOf<typeof TypeP>}`;
