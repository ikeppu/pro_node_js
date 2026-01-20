// Direct style
// FIFO stack
function toSecretString(str, finish) {
  // Made it async
  process.nextTick(() => {
    finish(null, str.replace(/[a-zA-Z]/g, "*"));
  });
}

let secret;

toSecretString("super secret key", (_, result) => {
  secret = result;
  console.log(secret);
});

console.log("end");

// Sync vs Async

const dataCache = new Map();

export function getValueThatMightBeCached(key, cb) {
  if (dataCache.has(key)) {
    // Sync
    cb(dataCache(key));
  } else {
    // Async
    setTimeout(() => {
      const fakeData = `Fetched data with key=${key}`;
      dataCache.set(key, fakeData);
      cb(fakeData);
    }, 500);
  }
}

function createDataWatcher(key) {
  let watchers = [];

  getValueThatMightBeCached(key, (res) => {
    watchers.forEach((fn) => fn(res));
  });

  return {
    onReady: (fn) => watchers.push(fn),
  };
}

const watcher = createDataWatcher("myKey");

watcher.onReady((data) => {
  console.log("watcher got " + data);

  const watcher2 = createDataWatcher("mykey");

  watcher2.onReady((data) => {
    console.log("watcher2 got " + data);
  });
});
