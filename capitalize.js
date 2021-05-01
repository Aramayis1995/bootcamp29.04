function string(str) {
  let x = str[0].toUpperCase() + str.toLowerCase().slice(1);
  return x;
}

console.log(string("FRED"));
