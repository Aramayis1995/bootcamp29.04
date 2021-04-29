function text(a, b) {
  arr = a.split("");
  ara = [];
  let j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "_") {
      ara.push(b[j]);
      j = j + 1;
      continue;
    }
    ara.push(arr[i]);
  }
  console.log(ara.join(""));
}
text("If at _ you dont _ try try _. ", ["first", "succeed", "again"]);
