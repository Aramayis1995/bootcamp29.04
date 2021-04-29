## #HOMEWORK29.04

**Given a sentence as a string. Split it according to space and comma and create an array consisting of the
words of the array. The last word should not contain the last . or!**

```javascript
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
```

---

```javascript
function pyramid(n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push([]);
  }
  let counter = 0;
  for (let i = 1; i <= ((1 + n) / 2) * n; ) {
    for (let j = counter; j < arr.length; j++) {
      arr[j].push(i);
      i++;
    }
    counter++;
  }
  let count = "";
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j <= arr[i].length - 1; j++) {
      count = count + " " + arr[i][j];
    }
    console.log(count);
    count = "";
  }
}
pyramid(9);
```

---
