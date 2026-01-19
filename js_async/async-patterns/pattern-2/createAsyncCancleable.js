import { CancelError } from "./cancelError.js";

export function createAsyncCancelable(generator) {
  return function asyncCancleable(...args) {
    const generatorObj = generator(...args);

    let reqCanceled = false;

    function cancel() {
      reqCanceled = true;
    }

    const promise = new Promise((res, rej) => {
      //Why I Need this
      async function nextYield(prevResult) {
        if (reqCanceled) {
          return rej(new CancelError());
        }

        if (prevResult.done) {
          return res(prevResult.value);
        }

        try {
          nextYield(generatorObj.next(await prevResult.value));
        } catch (error) {
          try {
            nextYield(generatorObj.throw(error));
          } catch (error2) {
            rej(error2);
          }
        }
      }

      nextYield({});
    });

    return { promise, cancel };
  };
}
