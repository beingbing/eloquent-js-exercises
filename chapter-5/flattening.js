function flatten(parArr) {
  return parArr.reduce((flat, cur) => flat.concat(cur));
}

// my solution is same as standard solution

console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
