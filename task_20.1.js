function number(n) {
  let arr = [];
  for (let i = 10; i <= 10 * n; i *= 10) {
    arr.push(Math.trunc(((n % i) / i) * 10));
  }

  console.log(Math.max(...arr) - Math.min(...arr));
}
number(2594);
