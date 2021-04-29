function givenArr(n) {
  let num = 0;
  let str = 0;
  for (i = 0; i < n.length; i++) {
    if (n[i] * 1 === n[i]) {
      num = num + 1;
    } else {
      str = str + 1;
    }
  }
  console.log("numbbers: " + num);
  console.log("strings: ", str);
}
givenArr([1, "10", "hi", 2, 3]);
