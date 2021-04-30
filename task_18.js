function arraySize(n) {
  let arr = [];
  let min = Math.min(...n);
  arr.push(min);
  for (let i = 0; i < n.length; i++) {
    arr[n[i] - min] = n[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + min) {
      arr[i] = undefined;
    }
  }
  console.log(arr);
}
arraySize([26, 30, 19, 5]);
