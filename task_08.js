function number(n) {
  n = String(n);
  let first_digit = n[0];
  let last_digit = n[n.length - 1];

  let new_str = n.substring(1, n.length - 1);

  console.log(last_digit + new_str + first_digit);
}
number(51236);
