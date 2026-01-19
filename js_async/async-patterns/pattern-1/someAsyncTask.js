export function someAsyncFunc(id) {
  console.log(`Async task with id=${id} is started`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Async task with id=${id} is done`);
      res(`Result of task<${id}>: is done`);
    }, 200);
  });
}
