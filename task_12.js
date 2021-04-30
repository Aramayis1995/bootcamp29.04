function text(a, b) {
  arr = a.split("");
  if (arr[arr.length - 1] === "." || arr[arr.length - 1] === "!") {
    arr.pop();
  }
  arrIndex = [];
  let j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "_") {
      arrIndex.push(b[j]);
      j = j + 1;
      continue;
    }
    arrIndex.push(arr[i]);
  }
  console.log(arrIndex.join(""));
}
text("If at _ you dont _ try try _.", ["first", "succeed", "again"]);
