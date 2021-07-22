function every(arr, predicateFunc) {
  for (let ele of arr) {
    if (!predicateFunc(ele)) return false;
  }
  return true;
}

function everyUsingSome(arr, predicateFunc) {
  return !arr.some((element) => !predicateFunc(element));
}

// my solution is same as standard solution

console.log(everyUsingSome([1, 3, 5], (n) => n < 10));
// → true
console.log(everyUsingSome([2, 4, 16], (n) => n < 10));
// → false
console.log(everyUsingSome([], (n) => n < 10));
// → true
