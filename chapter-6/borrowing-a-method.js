// ans: we need to create a symbol, as all symbols are unique,
// hence, even if we create a symbol by name 'hasOwnProperty',
// it won't hide the already present prototype property of the
// same name.

// my solution starts
const hasOwnProperty = Symbol();
Object.prototype[hasOwnProperty] = Object.prototype.hasOwnProperty;
let map = { one: true, two: true, hasOwnProperty: true };
// Fix this call
console.log(map[hasOwnProperty]("one"));
// → true
// my solution ends

// ===================================================
// standard solution binded the function call to
// javascript Object prototype

// standard solution starts
let map = { one: true, two: true, hasOwnProperty: true };
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
//standard solution ends
