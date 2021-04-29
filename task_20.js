function pyramid(n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push([]);
  }
  let counter = 0;
  for (let i = 1; i <= ((1 + n) / 2) * n; ) {
    for (let j = counter; j < arr.length; j++) {
      arr[j].push(i);
      i++;
    }
    counter++;
  }
  let count = "";
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j <= arr[i].length - 1; j++) {
      count = count + " " + arr[i][j];
    }
    console.log(count);
    count = "";
  }
}
pyramid(9);
