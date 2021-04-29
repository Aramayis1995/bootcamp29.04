function number(a, b) {
  n = String(b);
  m = String(a);
  for (i = 0; i < n.length; i++) {
    if (n[i] === m) {
      console.log("yes");
      break;
    } else if (i === n.length - 1) {
      console.log("no");
    }
  }
}
number(5, 2756);
