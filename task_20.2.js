function base_2_number(n) {
  let arr = [];
  let counter = 0;
  for (let i = 10; i <= 10 * n; i *= 10) {
    arr.push(Math.trunc(((n % i) / i) * 10));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter += 2 ** i;
    }
  }
  console.log(counter);
}
base_2_number(101011);
