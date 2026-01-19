import { someAsyncFunc } from "./someAsyncTask.js";

class CancelError extends Error {
  constructor() {
    super("Async operation was canceled");
    this.name = "Cancel Error";
  }
}

async function myFunc(cancel) {
  const result1 = await someAsyncFunc(1);
  console.log(result1);

  if (cancel.reqCanceled) {
    throw new CancelError();
  }

  const result2 = await someAsyncFunc(2);
  console.log(result2);
  const result3 = await someAsyncFunc(3);
  console.log(result3);
}

const cancel = { reqCanceled: false };

setTimeout(() => {
  cancel.reqCanceled = true;
}, 100);

myFunc(cancel).catch((err) => {
  if (err instanceof CancelError) {
    console.log("Function was canceled");
  } else {
    console.log("Error function");
  }
});
