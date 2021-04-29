function number(n) {
  let arr = [0, 1];
  if (n === 0) {
    console.log(arr[0]);
    return;
  }
  for (i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  console.log(arr[arr.length - 1]);
}
number(5);
