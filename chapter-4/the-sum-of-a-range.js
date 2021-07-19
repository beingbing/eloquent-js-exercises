function range(start, end, step = start < end ? 1 : -1) {
    let arr = new Array();
    if (step > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for (let ele of arr) {
        sum += ele;
    }
    return sum;
}

  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55

  // my solution is same as standard solution
  // with just one mistake, in decreasing step, i reversed the required array
  // which has been corrected