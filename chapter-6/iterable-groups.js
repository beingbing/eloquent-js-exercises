// wasn't able to complete next() function
// didn't thought of using position as iterator variable

const Group = require("./groups");

class GroupIterator {
  constructor(grp) {
    this.group = grp;
    this.position = 0;
  }
  next() {
    if (this.position >= this.group.arr.length) {
      return { done: true };
    } else {
      let result = { value: this.group.arr[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
