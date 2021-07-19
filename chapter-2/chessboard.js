let board = '', ev = true, size = 8;
for (let i = 1; i <= size; i++) {
    ev = !ev;
    for (let j = 1; j <= size; j++) {
        if (ev && i%2 === 0 && j%2 !== 0) board += '#';
        else if (!ev && i%2 !== 0 && j%2 === 0) board += '#';
        else board += ' ';
    }
    board += '\n';
}
console.log(board);

// standard solution
// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

// lesson learned -
// if instead of checking for i and j separately, i would have checked for i+j then,
// won't be needing an extra variable ev