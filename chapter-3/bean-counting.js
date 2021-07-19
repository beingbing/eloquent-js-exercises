function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, ch) {
    function isChar(i, len) {
        if (i >= len) return 0;
        if (str[i] === ch) return 1 + isChar(i+1, len);
        else return isChar(i+1, len);
    }

    return isChar(0, str.length);
}

console.log(countBs('ABCBE'));
console.log(countChar('ABCBE', 'A'));

// standard solution contains loop, mine recursion, otherwise solution is equivalent

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }  

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4