function number(a, b, c) {
  if (a / b > 1) {
    if (b / c > 1) {
      console.log(a, b, c);
    } else if (a / c > 1) {
      console.log(a, c, b);
    } else {
      console.log(c, a, b);
    }
  } else if (b / c < 1) {
    console.log(c, b, a);
  } else if (a / c > 1) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
}
number(300, 40, 350);
