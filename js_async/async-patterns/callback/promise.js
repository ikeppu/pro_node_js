// Await will wait for result
// Without await it will be async
async function someAsync() {
  console.log("start");

  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("test");
      res("test");
    }, 500);
  });

  console.log("end");
}

someAsync();
