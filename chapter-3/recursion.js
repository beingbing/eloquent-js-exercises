function isEven(a) {
    if (a === 0) return true;
    else if (a === 1) return false;
    else if (a < 0) return isEven(-a);
    else return isEven(a-2);
}

console.log(isEven(-1));

// my solution is same as standard solution