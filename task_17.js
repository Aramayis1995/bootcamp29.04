function sentens(n) {
  let arr = n.split("");
  let str = "";
  let wards = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== " " && arr[i] !== "," && arr[i] !== ".") {
      str = str + arr[i];
    } else {
      wards.push(str);
      str = "";
    }
  }
  console.log(wards);
}
sentens("Keep your friends close,but your enemies closer.");
