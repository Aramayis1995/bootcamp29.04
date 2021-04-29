function arrayIndex(n, m) {
  for (i = 0; i < n.length; i++) {
    if (n[i] === m) {
      console.log(i);
      return;
    }
  }
  let a = [n[0]];
  for (i = 1; i < n.length; i++) {
    if (Math.abs(m - a) > Math.abs(m - n[i])) {
      a[0] = n[i];
    }
  }
  console.log(a);
}
arrayIndex([41, 29, 13, 46, 26, 37, 84], 50);
