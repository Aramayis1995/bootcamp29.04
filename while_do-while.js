let arr = [1, 2, 3];
let i = 0;
while (i < arr.length) {
  console.log("for", i, arr[i]);
  i = i + 1;
}
console.log("");
i = 0;
do {
  console.log("for", i, arr[i]);
  i++;
} while (i < arr.length);
