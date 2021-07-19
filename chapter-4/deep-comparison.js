// my function lacked error detection and handling, but got the gist right
function deepEqual(val1, val2) {
    if (typeof val1 === 'object') {
        let kys = Object.keys(val1);
        for (let val of kys) {
            if (!deepEqual(val1[val], val2[val])) return false;
        }
        return true;
    } else return val1 === val2;
}

// standard solution
function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({val:1},{val:1}));
// → true