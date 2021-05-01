function numberFactorialal(n) {
  let counter = 1;
  for (let i = 1; i <= n; i++) {
    counter *= i;
  }
  console.log(counter);
}
numberFactorialal(7);
