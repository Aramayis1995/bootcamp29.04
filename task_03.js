function number(n) {
  n = String(n);
  if (n[n.length - 1] === "0") {
    console.log(n);
  } else {
    let last_digit = n[n.length - 1];
    let new_str = n.substring(0, n.length - 1);

    console.log(last_digit + new_str);
  }
}
number(325);
