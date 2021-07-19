// mine is recursive, standard function is iterative
function arrayToList(arr) {
    let list = {};
    function conv(i, len) {
        if (i >= len) return null;
        let node = {};
        node.value = arr[i];
        node.rest = conv(i+1, len);
        return node;
    }

    list = conv(0, arr.length);
    return list;
}

// mine is recursive, standard function is iterative
function listToArray(list) {
    let arr = new Array();
    function conv(list) {
        arr.push(list.value);
        if (!list.rest) return null;
        else conv(list.rest);
    }
    conv(list);
    return arr;
}

// standard function is more compact
function prepend(ele, list) {
    let node = {};
    node.value = ele;
    node.rest = list;
    return node;
}

// identical
function nth(list, pos) {
    if (!list.rest && pos) return undefined;
    if (pos === 0) return list.value;
    else return nth(list.rest, pos-1);
}

// extra
function append(ele, list) {
    if (!list.rest) {
        let node = {};
        node.value = ele;
        node.rest = null;
        list.rest = node; 
    } else append(list.rest);
}

// standard solution

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20