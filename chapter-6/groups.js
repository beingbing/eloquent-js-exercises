class Group {
  constructor() {
    this.arr = new Array();
  }

  add(val) {
    if (!this.has(val)) this.arr.push(val);
  }

  delete(val) {
    this.arr = this.arr.filter((v) => v !== val);
  }

  has(val) {
    return this.arr.includes(val);
  }

  static from = (a) => {
    let grp = new Group();
    for (let i of a) grp.add(i);
    return grp;
  };
}

module.exports = Group;

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
