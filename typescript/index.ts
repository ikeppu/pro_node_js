//  Return Type

const myFunc = () => {
  return "string";
};

// Using ReturnType to extract the return type of myFunc
type MyFuncType = ReturnType<typeof myFunc>; // string

// Example usage
const result: MyFuncType = myFunc(); // result is of type string

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => {};

// Parameters Type very useful
type makeQueryParameters = Parameters<typeof makeQuery>;

// Return type with promise

const getUser = async (id: string) => {
  return Promise.resolve({
    id,
    name: "John Doe",
    email: "john.doe@example.com",
  });
};

type ReturnGetUser = Awaited<ReturnType<typeof getUser>>;

// Union types

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFrameworks = keyof typeof testingFrameworks; // "vitest" | "jest" | "mocha"

// Extracting members of a discriminated union
// Excract and Exclude types
// Extract<T, U>  -->  Extract from T those types that are assignable to U
// Exclude<T, U>  -->  Exclude from T those types that are assignable to U

type EventLocal =
  | { type: "click"; event: MouseEvent }
  | { type: "focus"; event: FocusEvent }
  | { type: "keydown"; event: KeyboardEvent };

type ClickEvent = Extract<EventLocal, { type: "click" }>; // { type: "click"; event: MouseEvent }
type FocusEventType = Extract<EventLocal, { type: "focus" }>; // { type: "focus"; event: FocusEvent }
type KeydownEvent = Extract<EventLocal, { type: "keydown" }>; // { type: "keydown"; event: KeyboardEvent }

type Fruit = "apple" | "banana" | "orange" | "grape";

type CitrusFruit = Extract<Fruit, "orange" | "grape">;

type NonKeyboardEvent = Exclude<EventLocal, { type: "keydown" }>;

// Extract object properties into individual types

const FakeDataDefaults = {
  String: "Default String",
  Int: 1,
  Float: 1.5,
  Boolean: true,
  ID: "id",
};

type StringType = typeof FakeDataDefaults.String; // string
type IntType = typeof FakeDataDefaults.Int; // number
type FloatType = typeof FakeDataDefaults.Float; // number
type BooleanType = typeof FakeDataDefaults.Boolean; // boolean
type IDType = typeof FakeDataDefaults.ID; // string

//
type EventType = EventLocal["type"]; // "click" | "focus" | "keydown"

const programModeEnumMap = {
  GROUP: "group",
  INDIVIDUAL: "individual",
  SELF_PACED: "self_paced",
} as const;

type ProgramMode = (typeof programModeEnumMap)[keyof typeof programModeEnumMap]; // "group" | "individual" | "self_paced"
type GroupProgram = (typeof programModeEnumMap)["GROUP"]; // "group"

const test: GroupProgram = "group";

// Create union from object values
const colors = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
} as const;

type Color = (typeof colors)[keyof typeof colors]; // "red" | "green" | "blue"

const favoriteColor: Color = "green";

type IndividualProgram = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  "GROUP"
>];

// Get all values from object

const frontendToBackendMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  microFrontend: "MICRO_FRONTEND",
} as const;

type Obj = typeof frontendToBackendMap;

type FrontendToBackendMapValues = Obj[keyof Obj];

const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBananaT = (typeof fruits)[0 | 1];
type All = (typeof fruits)[number];
