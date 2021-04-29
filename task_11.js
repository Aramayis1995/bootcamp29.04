function number(n) {
  if (n === 0) {
    console.log("Cannot calculate.");
    return;
  }
  n = String(n);
  let product = 1;
  let sum = 0;
  for (i = 0; i < n.length; i++) {
    product = product * n[i];
    sum = sum + +n[i];
  }
  if (product % sum === 0) {
    console.log(product / sum);
  } else {
    console.log(product % sum);
  }
}
number(423);
