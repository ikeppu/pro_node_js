function getCoffee() {
  console.log("Getting coffee");
  doSyncStuff(() => {
    console.log("Coffee is here asyc");
  });
  //   console.log("Coffee is here");
}

function singASong() {
  console.log("Start singing");
}

function doSyncStuff(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

getCoffee();
singASong();
