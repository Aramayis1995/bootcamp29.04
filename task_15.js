function str(n) {
  let arr = [n[0], n[0]];
  for (i = 0; i < n.length; i++) {
    if (arr[0].length < n[i].length) {
      arr[0] = n[i];
    }
    if (arr[1].length > n[i].length) {
      arr[1] = n[i];
    }
  }
  console.log(arr[0].length + arr[1].length);
}
str(["wish", "fly", "understand", "longer", "unexpect", "heart"]);
