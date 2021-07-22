function loop(val, testFunc, updateFunc, bodyFunc) {
  if (!testFunc(val)) {
    return;
  }
  bodyFunc(val);
  loop(updateFunc(val), testFunc, updateFunc, bodyFunc);
}

// standard solution
// my solution is recursive, standard solution is iterative
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
