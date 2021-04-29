#HOMEWORK29.04

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
