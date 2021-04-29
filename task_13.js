function givenArr(n) {
  let arr = [];
  for (i = 0; i < n.length; i++) {
    if (n[i] * 1 === n[i] && n[i] % 2 !== 0) {
      arr.push(n[i]);
    }
  }
  for (i = 0; i < n.length; i++) {
    if (n[i] * 1 === n[i] && n[i] % 2 === 0) {
      arr.push(n[i]);
    }
  }
  console.log(arr);
}
givenArr([8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3]);
