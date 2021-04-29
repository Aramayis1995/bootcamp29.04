function number(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    console.log("unsigned");
  } else if (
    (a > 0 && b > 0 && c > 0) ||
    (a > 0 && b < 0 && c < 0) ||
    (b > 0 && a < 0 && c < 0) ||
    (c > 0 && b < 0 && a < 0)
  ) {
    console.log("+");
  } else {
    console.log("-");
  }
}
number(5, -25, -15);
