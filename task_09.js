function number(n) {
  if (n === 0 || n === 1 || n === 2) {
    console.log("no");
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("no");
      break;
    } else if (i === n - 1) {
      console.log("yes");
    }
  }
}
number(2);
