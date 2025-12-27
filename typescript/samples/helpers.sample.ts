import { S } from "ts-toolbelt";
type ReturnWhatIPassIn<T> = T;

type Something = ReturnWhatIPassIn<"Something">;

// type Year = Record<>

const t: Something = "Something";

// Maybe pattern

type Maybe<T extends {}> = T | null | undefined;

// type Example = Maybe<string>;

// -------------------------------------------------------------- //

type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

const addRoutePrefix = (route: string) => {};

const test: AddRoutePrefix<"about"> = "/about";

// -------------------------------------------------------------- //

type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};

const testData: CreateDataShape<string, TypeError> = {
  data: "",
  error: new Error("test"),
};

// -------------------------------------------------------------- //

type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

// -------------------------------------------------------------- //

let t1: Maybe<string> = null;
let t2: Maybe<{
  wow: true;
}>;

// -------------------------------------------------------------- //

type NonEmptyArray<T> = [T, ...Array<T>];

const makeEnum = (values: NonEmptyArray<string>) => {};

// let example: NonEmptyArray<string> = ["st", "fas"];

// -------------------------------------------------------------- //

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

// let example: YouSayGoodbyeAndISayHello<"hello"> = "goodbye";

// -------------------------------------------------------------- //

type GetDataValue<T> = T extends { data: infer TData } ? TData : never;

// type Example = GetDataValue<{ data: { isLoggedIn: true } }>;

// -------------------------------------------------------------- //

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

// type Example = MyComplexInterface<
//   "click",
//   "window",
//   "my-event",
//   { x: 10; y: 10 }
// >;

// -------------------------------------------------------------- //

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King"
];

// First solution
// type GetSurname<T extends string> = S.Split<T, " ">[1];

// Second solution
type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

// type Example = GetSurname<Names[0]>;
