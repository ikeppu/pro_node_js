# The event loop takes events from the event queue and puts their callbacks on the call stack

# The call stack is a list of functions

# Stack frame

```js
const func1 = () => {
  func2();
};
const func2 = () => {
  func3();
};
const func3 = () => {
  func4();
};
const func4 = () => {
  func4();
};
```

# Event loop, Call Stack, Task Queue, Microtask. Queue

# Javascript Single Thred

#
