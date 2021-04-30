function arrayIndex(n) {
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    let x = 0;
    for (let j = 0; j < n[i].length; j++) {
      x = x + n[i][j];
    }
    arr.push(x);
  }
  console.log(arr);
}
arrayIndex([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]);
