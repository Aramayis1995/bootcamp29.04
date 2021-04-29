function number(a, b, c) {
  if (a * b * c === 0) {
    console.log("unsigned");
  } else if (a * b * c > 0) {
    console.log("+");
  } else {
    console.log("-");
  }
}
number(5, -25, 15);
